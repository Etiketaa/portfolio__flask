import Navbar from './Navbar';
import Hero from './Hero';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import WhyWorkWithMe from './WhyWorkWithMe';
import ContactSection from './ContactSection';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

export default function Portfolio() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse will-change-transform"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700 will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000 will-change-transform"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <WhyWorkWithMe />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}