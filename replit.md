# Reynel Elerio Portfolio Website

## Overview
A modern, professional personal portfolio website for Reynel Elerio, a Data Scientist & Analytics Manager. Built with React, Vite, Express, and Tailwind CSS.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js
- **Styling**: Tailwind CSS with custom light blue theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Routing**: Wouter
- **State Management**: TanStack Query

## Design System
- **Primary Color**: Light blue (HSL 205, 85%, 45%)
- **Font**: Inter
- **Theme**: Clean, modern, executive-level design
- **Dark Mode**: Fully supported

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Layout
│   │   ├── sections/       # HeroSection
│   │   ├── cards/          # ProjectCard, ExperienceCard, DashboardCard
│   │   └── ui/             # Shadcn UI components
│   ├── pages/              # Home, About, Experience, Projects, Dashboards, Skills, Contact
│   ├── lib/                # Utilities, data, queryClient
│   └── hooks/              # Custom hooks
server/
├── routes.ts               # API routes (contact form)
├── storage.ts              # In-memory storage
└── index.ts                # Express server
shared/
└── schema.ts               # TypeScript types and Zod schemas
```

## Pages
1. **Home** (/) - Hero section with stats, "What I Do" cards, featured analytics projects, "Apps I've Built" section, skills preview, CTA
2. **About** (/about) - AI-forward professional overview, core expertise areas, values
3. **Experience** (/experience) - Career timeline with highlights (PFM role updated with AI dev methodology)
4. **Projects** (/projects) - Analytics reports and case studies with category filtering
5. **Dashboards** (/dashboards) - Visual gallery with preview modals
6. **Skills** (/skills) - Skills organized by category (Data, Tools, Growth) — includes AI-Assisted Development, SQL, Python, React+TypeScript, Node/Express, Replit+Claude
7. **Contact** (/contact) - Contact form with validation

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Get all contact messages (for admin)

## Key Features
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- SEO-optimized meta tags
- Accessible form with client-side validation
- Card-based layouts for projects and dashboards
- Category filtering on projects page
- Modal previews for dashboard gallery

## User Preferences
- Title: "Data Scientist & Analytics Manager" (not "Head of Analytics")
- Focus on Prop Firm Match work experience
- Light blue professional color theme
- Emphasis on: Revenue Analytics, Sales Tracking, Dashboard Development, Survey & Insights
- AI-forward positioning: Claude + Replit as deliberate development methodology, not a buzzword
- "Apps I've Built" section on Home page showcases 3 AI-engineered full-stack tools with "AI-Engineered" badge

## Running the Project
The application runs on port 5000 with `npm run dev`. The Express server handles both API routes and serves the Vite-built frontend.
