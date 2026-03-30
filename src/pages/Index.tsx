import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>© 2026 Ahmed Raza. Built with passion & code.</p>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Index;
