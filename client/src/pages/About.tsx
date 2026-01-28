import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Lightbulb, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const coreAreas = [
  {
    icon: BarChart3,
    title: "Finance & Revenue Analytics",
    description: "Building systems to track, analyze, and forecast revenue streams with precision."
  },
  {
    icon: TrendingUp,
    title: "Sales Performance Tracking",
    description: "Creating dashboards that provide real-time visibility into sales metrics and KPIs."
  },
  {
    icon: Users,
    title: "User Research & Insights",
    description: "Conducting user research and analyzing qualitative and quantitative data for product improvements."
  },
  {
    icon: Lightbulb,
    title: "Dashboard Development",
    description: "Crafting interactive visualizations and automated dashboard solutions."
  }
];

const values = [
  "Data-driven decision making",
  "End-to-end analytics ownership",
  "Business impact focus",
  "Cross-functional collaboration",
  "AI-driven innovation",
  "Continuous improvement"
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-title">
              Turning Complex Data into{" "}
              <span className="text-gradient">Strategic Advantage</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-intro">
              Data analytics leader pioneering the application of AI-driven tools for real world application. 
              Founder and business idea owner behind automated dashboard solutions that streamline data needs 
              for startups and growing companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Professional Overview</h2>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Currently serving as <span className="text-foreground font-medium">Analytics Manager</span> at{" "}
                      <span className="text-primary font-medium">Prop Firm Match Global FZCO</span>, I manage 
                      the full data lifecycle and decision-making engines across finance, marketing, product, 
                      and development teams while leading cross-functional data initiatives.
                    </p>
                    
                    <p>
                      My career spans roles at industry leaders including <span className="text-foreground font-medium">Accenture</span>, 
                      {" "}<span className="text-foreground font-medium">Google Operations Center</span>, 
                      {" "}<span className="text-foreground font-medium">Airbnb</span>, and 
                      {" "}<span className="text-foreground font-medium">TDCX</span>, where I've developed expertise 
                      in user research, marketing analytics, and digital campaign optimization across global markets.
                    </p>
                    
                    <p>
                      I specialize in designing and optimizing tracking systems using Google Tag Manager and GA4, 
                      conducting performance evaluation of digital campaigns, and translating analytical findings 
                      into actionable business strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Core Values</h3>
                  <div className="space-y-3">
                    {values.map((value) => (
                      <div key={value} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4" data-testid="text-areas-title">Core Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My work at Prop Firm Match and beyond spans these key areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{area.title}</h3>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
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
          >
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-none">
              <CardContent className="py-12">
                <div className="max-w-3xl mx-auto text-center">
                  <Badge variant="secondary" className="mb-4">Current Focus</Badge>
                  <h2 className="text-2xl font-bold mb-4">Prop Firm Match Global FZCO</h2>
                  <p className="text-muted-foreground mb-6">
                    Leading the full analytics lifecycle from data collection and management to analysis and reporting. 
                    Developing data-driven dashboards and insights to guide strategic decisions across marketing, 
                    product, and operations while partnering with cross-functional teams.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge>Revenue Analytics</Badge>
                    <Badge>Sales Tracking</Badge>
                    <Badge>Dashboard Development</Badge>
                    <Badge>GA4 & GTM</Badge>
                    <Badge>Conversion Optimization</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Want to Know More?</h2>
            <p className="text-muted-foreground mb-8">
              Check out my experience and projects to see how I've delivered results.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/experience">
                <Button className="gap-2" data-testid="button-view-experience">
                  View Experience
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="gap-2" data-testid="button-view-projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
