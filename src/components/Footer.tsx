import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]/90 backdrop-blur-xl py-12 px-4 sm:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-md">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-sm text-white tracking-wider">
              HARSH GUPTA
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Full Stack Java Developer & Software Engineer
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HarshGupta2019"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-gupta-073161353"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:121119harshgupta@gmail.com"
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="text-center md:text-right">
            <div>© {new Date().getFullYear()} Harsh Gupta. All rights reserved.</div>
            <div className="text-[10px] text-slate-500 flex items-center justify-center md:justify-end gap-1 mt-0.5">
              Crafted with React, Spring Architecture & Tailwind
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
