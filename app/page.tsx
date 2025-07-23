import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExperienceSkills from "@/components/ExperienceSkills";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ExperienceSkills />
      <ScrollToTop />
      <Contact />
      <Footer />
    </main>
  );
}
