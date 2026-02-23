import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/Daily_Reporting_(3)_1769611978822.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img 
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent dark:from-background dark:via-background/80 dark:to-background/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider drop-shadow-sm">
              Data Scientist & Analytics Manager
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-title">
            <span className="text-gray-900 dark:text-foreground">Hi, I'm </span>
            <span className="text-gradient">Reynel Elerio</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-800 dark:text-muted-foreground mb-4 font-semibold" data-testid="text-hero-headline">
            Transforming Data Into Decisions That Drive Growth
          </p>

          <p className="text-lg text-gray-700 dark:text-muted-foreground mb-8 max-w-2xl font-medium" data-testid="text-hero-description">
            developing automated dashboard solutions that streamline data needs for startups 
            and growing companies. Currently managing the full data lifecycle across finance, 
            marketing, product, and development at <span className="text-primary font-semibold">Prop Firm Match Global FZCO</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="gap-2" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-contact-me">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-md bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold" data-testid="text-stat-dashboards">15+</p>
                <p className="text-sm text-muted-foreground">Dashboards Built</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-md bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold" data-testid="text-stat-experience">7+ Years</p>
                <p className="text-sm text-muted-foreground">Analytics Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-md bg-primary/10">
                <PieChart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold" data-testid="text-stat-companies">5+</p>
                <p className="text-sm text-muted-foreground">Companies Served</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
