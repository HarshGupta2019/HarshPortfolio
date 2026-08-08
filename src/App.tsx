import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';

import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  // Active Section Intersection Observer
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-cyan-300">
      
      {/* Initial Animated Loader */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Custom Glowing Cursor */}
          <CustomCursor />

          {/* Interactive Background Grid, Particles & Glow Blobs */}
          <BackgroundEffects />

          {/* Top Reading Progress Bar */}
          <ScrollProgressBar />

          {/* Glass Header Navigation */}
          <Navbar
            activeSection={activeSection}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
            <CertificatesSection />
            <EducationSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Project Modal */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* Resume Viewer / Printable Modal */}
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </>
      )}

    </div>
  );
}
