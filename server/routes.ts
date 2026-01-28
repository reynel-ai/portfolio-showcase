import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";
import { getUncachableResendClient } from "./resend";

const CONTACT_EMAIL = "ibecomewhaithink@gmail.com";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        await client.emails.send({
          from: fromEmail || 'Portfolio Contact <onboarding@resend.dev>',
          to: CONTACT_EMAIL,
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
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

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  return httpServer;
}
