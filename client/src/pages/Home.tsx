import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { projects, skills } from "@/lib/data";

const highlights = [
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "End-to-end revenue tracking and forecasting systems that drive strategic decisions."
  },
  {
    icon: LineChart,
    title: "Sales Tracking",
    description: "Comprehensive sales dashboards providing real-time visibility into performance metrics."
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Transforming complex data into clear, actionable insights for stakeholders."
  },
  {
    icon: Users,
    title: "Survey & Insights",
    description: "Customer research and survey analysis to understand needs and improve satisfaction."
  }
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const dataSkills = skills.filter(s => s.category === "data").slice(0, 6);
  const toolSkills = skills.filter(s => s.category === "tools");

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
    </Layout>
  );
}
