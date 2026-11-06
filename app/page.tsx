import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemsArchitecture from "@/components/SystemsArchitecture";
import Projects from "@/components/Projects";
import ExperienceSkills from "@/components/ExperienceSkills";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div
      id="top"
      className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground"
    >
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SystemsArchitecture />
        <Projects />
        <ExperienceSkills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
