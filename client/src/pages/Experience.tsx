import { Layout } from "@/components/layout/Layout";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Career Journey</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-experience-title">
              Professional{" "}
              <span className="text-gradient">Experience</span>
            </h1>

            <p className="text-lg text-muted-foreground" data-testid="text-experience-intro">
              My career has been focused on leveraging data to drive measurable business outcomes. 
              From early roles in data analysis to leading analytics strategy, I've consistently 
              delivered impact through data-driven insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-0"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience}
                isFirst={index === 0}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-border text-center"
          >
            <p className="text-muted-foreground mb-6">
              Interested in how I've applied this experience to real projects?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/projects">
                <Button className="gap-2" data-testid="button-view-projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="gap-2" data-testid="button-get-in-touch">
                  Get in Touch
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
