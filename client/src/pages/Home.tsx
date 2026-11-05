import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { About, ContactSection, FeaturedWork, Pipeline } from "@/components/site/Sections";
import { scrollToHashOnLoad } from "@/lib/scroll";

export default function Home() {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Pipeline />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
