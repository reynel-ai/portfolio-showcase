import { Layout } from "@/components/layout/Layout";
import { DashboardCard } from "@/components/cards/DashboardCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { dashboards } from "@/lib/data";

export default function Dashboards() {
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
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-dashboards-title">
              Dashboards &{" "}
              <span className="text-gradient">Reports</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-dashboards-intro">
              A visual gallery of dashboards and reports I've created to help organizations 
              make data-driven decisions. Click on any dashboard to see a preview.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map((dashboard, index) => (
              <motion.div
                key={dashboard.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <DashboardCard dashboard={dashboard} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-card rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-4">Need a Custom Dashboard?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I can help you build dashboards tailored to your specific business needs. 
              From revenue tracking to customer insights, let's discuss your requirements.
            </p>
            <Link href="/contact">
              <Button className="gap-2" data-testid="button-discuss-project">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
