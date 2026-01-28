import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const dataSkills = skills.filter(s => s.category === "data");
  const toolSkills = skills.filter(s => s.category === "tools");
  const growthSkills = skills.filter(s => s.category === "growth");

  const skillCategories = [
    {
      title: "Data & Analytics",
      description: "Core analytical competencies for extracting insights and driving decisions",
      icon: BarChart3,
      skills: dataSkills,
      variant: "default" as const
    },
    {
      title: "Tools & Technologies",
      description: "Technical tools and platforms I use to build analytics solutions",
      icon: Code2,
      skills: toolSkills,
      variant: "secondary" as const
    },
    {
      title: "Growth & Digital",
      description: "Digital marketing and growth capabilities that complement analytics work",
      icon: Rocket,
      skills: growthSkills,
      variant: "outline" as const
    }
  ];

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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-skills-title">
              Skills &{" "}
              <span className="text-gradient">Expertise</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-skills-intro">
              A comprehensive overview of my technical and analytical skills, organized by 
              category to show the breadth and depth of my capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full" data-testid={`card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-md bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill.name} 
                          variant={category.variant}
                          className="px-3 py-1.5"
                          data-testid={`badge-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-none">
              <CardContent className="py-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
                  <p className="text-muted-foreground mb-6">
                    The data and analytics landscape is constantly evolving. I'm committed to staying 
                    current with the latest tools, techniques, and best practices to deliver the most 
                    effective solutions for my clients and organizations.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/projects">
                      <Button className="gap-2" data-testid="button-see-in-action">
                        See Skills in Action
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="gap-2" data-testid="button-lets-talk">
                        Let's Talk
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
