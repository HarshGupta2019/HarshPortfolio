import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, Eye, Mail, ArrowUpRight, Github, Linkedin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Animated Typing Effect
  useEffect(() => {
    const currentFullTitle = PERSONAL_INFO.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedTitle === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedTitle === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
      } else {
        setTypedTitle((prev) =>
          isDeleting
            ? currentFullTitle.substring(0, prev.length - 1)
            : currentFullTitle.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedTitle, isDeleting, titleIndex]);

  // 3D Mouse Parallax Tilt for Image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: 3D Profile Photo with Rotating Ring */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-1">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group cursor-pointer perspective-1000"
          >
            {/* Outer Rotating Gradient Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-600 via-cyan-400 to-purple-600 opacity-80 blur-sm animate-spin-slow group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Pulse Glow Aura */}
            <div className="absolute -inset-10 rounded-full bg-indigo-500/25 blur-3xl animate-pulse-glow" />

            {/* Profile Image Container with 3D Tilt */}
            <motion.div
              style={{
                transform: `rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg)`,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-[#050816]/80 backdrop-blur-md border border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.4)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top brightness-105 contrast-105 saturate-105 transform group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: '50% 10%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/30 via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>

            {/* Floating Tech Badges around Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -left-4 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold text-cyan-300 border border-cyan-400/30 shadow-lg flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Spring Boot
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-8 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold text-indigo-300 border border-indigo-400/30 shadow-lg flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Full Stack Java
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-3 left-8 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold text-purple-300 border border-purple-400/30 shadow-lg flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              React & MySQL
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Hero Text & Interactive Call To Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-300 border border-cyan-500/30 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available For Full-Stack Developer Roles
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 tracking-wide mb-1">
              Hi, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
                {PERSONAL_INFO.name}
              </span>
            </h1>
          </motion.div>

          {/* Typing Effect Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6"
          >
            <span className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 font-mono">
              {typedTitle}
            </span>
            <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 ml-1 animate-pulse" />
          </motion.div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8"
          >
            {PERSONAL_INFO.aboutBio}
          </motion.p>

          {/* Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <Download className="w-4 h-4 text-cyan-200" />
              Download Resume
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-200 glass-panel hover:bg-white/10 border border-white/15 hover:border-cyan-400/50 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              View Projects
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm text-cyan-300 glass-panel border border-cyan-500/30 hover:bg-cyan-500/10 transition-all hover:scale-[1.03]"
            >
              <Mail className="w-4 h-4" />
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Icons Floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/HarshGupta2019"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel hover:bg-indigo-600/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-indigo-400/50 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/harsh-gupta-073161353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/50 shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:121119harshgupta@gmail.com"
                className="p-3 rounded-xl glass-panel hover:bg-purple-600/20 text-slate-300 hover:text-purple-400 border border-white/10 hover:border-purple-400/50 shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:+919392599135"
                className="p-3 rounded-xl glass-panel hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-400/50 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110"
                aria-label="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
