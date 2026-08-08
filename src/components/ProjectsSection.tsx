import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold text-cyan-400 mb-3 border border-cyan-500/30"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            04. FEATURED PROJECTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Crafted with <span className="text-gradient">Precision & Scalability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            Real-world full-stack applications showcasing Spring Boot enterprise architecture, RESTful APIs, and dynamic React interfaces.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
              onSelect={() => onSelectProject(project)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Individual Project Card with Spotlight Hover Effect
interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isInView, onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="glass-panel-interactive rounded-3xl border border-white/10 overflow-hidden relative group flex flex-col justify-between shadow-2xl"
    >
      {/* Radial Spotlight Follower */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      {/* Top Banner Image with Overlay */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold text-cyan-300 glass-panel border border-cyan-400/30 shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Floating Quick Interactive Demo Trigger */}
        <button
          onClick={onSelect}
          className="absolute top-4 right-4 p-2.5 rounded-xl glass-panel text-white hover:text-cyan-300 border border-white/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-1.5 text-xs font-semibold"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          Interactive Demo
        </button>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              {project.tagline}
            </span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mb-6 space-y-2">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
              Key Capabilities:
            </div>
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onSelect}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300"
          >
            <Layers className="w-4 h-4 text-cyan-300" />
            Explore Full Architecture & Live Playground
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
