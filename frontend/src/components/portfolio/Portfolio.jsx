import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ProcessSection from "./ProcessSection";
import WhyWorkWithMe from "./WhyWorkWithMe";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";

export default function Portfolio() {
  return (
    <div className="bg-canvas text-content min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyWorkWithMe />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}