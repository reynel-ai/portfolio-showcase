import type { Express, NextFunction, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";
import { getUncachableResendClient } from "./resend";

const CONTACT_EMAIL = "ibecomewhatithink@gmail.com";
const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;
const CONTACT_RATE_MAX_REQUESTS = 5;
const CONTACT_RATE_MAX_IPS = 5000;
const contactRateLimits = new Map<string, { count: number; resetAt: number }>();

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function limitContactSubmissions(req: Request, res: Response, next: NextFunction) {
  const now = Date.now();
  const ip = req.ip ?? req.socket.remoteAddress ?? "unknown";
  let entry = contactRateLimits.get(ip);

  if (!entry || entry.resetAt <= now) {
    if (!entry && contactRateLimits.size >= CONTACT_RATE_MAX_IPS) {
      contactRateLimits.forEach((limit, key) => {
        if (limit.resetAt <= now) contactRateLimits.delete(key);
      });
      if (contactRateLimits.size >= CONTACT_RATE_MAX_IPS) {
        res.status(503).json({ success: false, error: "Contact service is temporarily unavailable." });
        return;
      }
    }
    entry = { count: 0, resetAt: now + CONTACT_RATE_WINDOW_MS };
    contactRateLimits.set(ip, entry);
  }

  if (entry.count >= CONTACT_RATE_MAX_REQUESTS) {
    res.setHeader("Retry-After", String(Math.max(1, Math.ceil((entry.resetAt - now) / 1000))));
    res.status(429).json({ success: false, error: "Too many messages. Please try again later." });
    return;
  }

  entry.count += 1;
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", limitContactSubmissions, async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        await client.emails.send({
          from: fromEmail || 'Portfolio Contact <onboarding@resend.dev>',
          to: CONTACT_EMAIL,
          subject: `Portfolio contact: ${validatedData.subject}`,
          replyTo: validatedData.email,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(validatedData.subject)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(validatedData.message).replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }
      
      res.status(201).json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromError(error);
        res.status(400).json({ success: false, error: validationError.message });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  app.get("/api/contact", (_req, res) => {
    res.status(404).json({ success: false, error: "Not found" });
  });

  return httpServer;
}
