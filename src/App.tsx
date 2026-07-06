import "./index.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { InternshipSection } from "./sections/InternshipSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <InternshipSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
