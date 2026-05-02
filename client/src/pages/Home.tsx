import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Users, Globe, Database, GitBranch, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, skills } from "@/lib/data";
import snapshotDbt from "@assets/image_1777737903632.png";
import snapshotPfmDash from "@assets/image_1777737830658.png";
import snapshotPfi from "@assets/image_1777737838615.png";

const highlights = [
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "End-to-end revenue tracking and forecasting — from raw BigQuery data to executive dashboards, without waiting on engineering."
  },
  {
    icon: LineChart,
    title: "Sales Tracking",
    description: "Shipping real-time KPI dashboards that give leadership instant visibility into what's driving or dragging performance."
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Translating complex, multi-source data into clear, actionable insights stakeholders can act on immediately."
  },
  {
    icon: Users,
    title: "Survey & Insights",
    description: "Designing and analyzing user surveys to surface friction points and directly inform product and UX decisions."
  }
];

const builtApps = [
  {
    icon: Database,
    title: "dbt Model Builder",
    description: "A web-based development environment for managing a dbt analytics project on Google BigQuery. Features AI-assisted file editing with plain-English descriptions, GitHub-style diffs before applying changes, BigQuery dataset browsing, SQL validation, and a History page tracking pending changes, recent commits, and merged PRs.",
    stack: ["React", "Vite", "Express", "BigQuery", "dbt", "GitHub Actions", "Replit"],
    snapshot: snapshotDbt
  },
  {
    icon: BarChart3,
    title: "Prop Firm Match — Unified Analytics Dashboard",
    description: "A password-protected React + Express app serving as the analytics command center for PropFirmMatch.com. Pulls live data from BigQuery, PostHog, ActiveCampaign, and Google Sheets. Includes daily/weekly KPIs, email campaign analytics, revenue attribution with last-touch and multi-touch models, and a Futures Prop Survey Dashboard with CSV export.",
    stack: ["React", "Vite", "Express", "BigQuery", "PostHog", "ActiveCampaign", "Recharts", "TailwindCSS"],
    snapshot: snapshotPfmDash
  },
  {
    icon: GitBranch,
    title: "Prop Firm Intelligence",
    description: "A full-stack analytics platform that scrapes and analyzes ~235,000 Trustpilot reviews across 54 prop trading firms. Combines a React frontend (KPI cards, scatter plot, sortable firm table, per-firm detail pages) with an Express API backed by PostgreSQL. LLM-powered sentiment analysis surfaces themes per firm, with publication-ready chart exports.",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Drizzle ORM", "TypeScript", "ScraperAPI"],
    snapshot: snapshotPfi
  }
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const dataSkills = skills.filter(s => s.category === "data").slice(0, 6);
  const toolSkills = skills.filter(s => s.category === "tools");
  const [activeSnapshot, setActiveSnapshot] = useState<{ title: string; src: string } | null>(null);

  return (
    <Layout>
      <HeroSection />

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-expertise-title">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I help organizations unlock the power of their data through analytics, 
              visualization, and strategic insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300 text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-12 flex-wrap gap-4"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2" data-testid="text-projects-title">Featured Projects</h2>
              <p className="text-muted-foreground">Recent work showcasing measurable business impact</p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="pt-6">
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.problem}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tools.slice(0, 3).map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs font-normal">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-primary font-medium line-clamp-2">{project.impact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-12 flex-wrap gap-4"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2" data-testid="text-apps-title">Apps I've Built</h2>
              <p className="text-muted-foreground max-w-2xl">
                Internal tools engineered with AI (Claude + Replit) — shipped without a dedicated engineering team.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builtApps.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                        <app.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="default" className="text-xs flex-shrink-0 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20">
                        AI-Engineered
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-base mb-2">{app.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{app.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveSnapshot({ title: app.title, src: app.snapshot })}
                      className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline w-fit mt-auto"
                      data-testid={`button-snapshot-${index}`}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Check Snapshot
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-skills-title">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of analytical expertise and technical tools to deliver impactful results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Data & Analytics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dataSkills.map((skill) => (
                      <Badge key={skill.name} variant="default" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Tools & Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {toolSkills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link href="/skills">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-skills">
                View All Skills
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-cta-title">Ready to Transform Your Data?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how data-driven insights can help grow your business and improve decision-making.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-cta-contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeSnapshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveSnapshot(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-background rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="font-semibold text-sm truncate">{activeSnapshot.title}</span>
                <button
                  onClick={() => setActiveSnapshot(null)}
                  className="p-1 rounded-md hover:bg-muted transition-colors flex-shrink-0"
                  data-testid="button-close-snapshot"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <img
                src={activeSnapshot.src}
                alt={`${activeSnapshot.title} snapshot`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
