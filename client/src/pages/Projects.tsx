import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data";

const categories = ["All", "Finance Analytics", "Business Intelligence", "Survey & Insights", "Marketing Analytics", "Data Science"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-projects-title">
              Projects &{" "}
              <span className="text-gradient">Case Studies</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-projects-intro">
              A collection of analytics work and research — the reports, surveys, and case studies 
              built using SQL, BigQuery, GA4, and Looker Studio that drive business decisions at 
              Prop Firm Match. For the full-stack apps I've shipped with AI, see the home page.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer transition-colors"
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Want to see the dashboards and reports I've built?
            </p>
            <Link href="/dashboards">
              <Button className="gap-2" data-testid="button-view-dashboards">
                View Dashboards Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
