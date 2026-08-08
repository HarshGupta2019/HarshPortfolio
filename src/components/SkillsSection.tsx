import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Search, Sparkles, Server, Layout, Database, Wrench, Terminal, Cpu } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Backend': return <Server className="w-4 h-4" />;
      case 'Frontend': return <Layout className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Tools': return <Wrench className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold text-cyan-400 mb-3 border border-cyan-500/30"
          >
            <Code className="w-3.5 h-3.5" />
            02. TECH STACK & SKILLS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            A breakdown of my technical domain expertise, frameworks, libraries, and developer toolkits.
          </motion.p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {getCategoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-panel text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 border border-white/10 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
};

// Individual Skill Card Subcomponent
interface SkillCardProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isInView }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
      }}
      className="glass-panel-interactive p-5 rounded-2xl border border-white/10 relative group overflow-hidden flex flex-col justify-between"
    >
      {/* Background Accent Glow on Hover */}
      <div
        className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: skill.color || '#6366F1' }}
      />

      {/* Top Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/90 font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20">
            {skill.category}
          </span>
          <h3 className="text-lg font-bold text-white mt-1.5 flex items-center gap-2">
            {skill.name}
          </h3>
        </div>

        {/* Circular Percentage Meter */}
        <div className="relative w-11 h-11 flex items-center justify-center font-mono text-xs font-bold text-white">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-800"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="transition-all duration-1000 ease-out"
              strokeWidth="3.5"
              strokeDasharray={`${skill.level}, 100`}
              strokeLinecap="round"
              stroke={skill.color || '#6366F1'}
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[10px]">{skill.level}%</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        {skill.description}
      </p>

      {/* Progress Line */}
      <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #6366F1, ${skill.color || '#06B6D4'})`,
            boxShadow: `0 0 10px ${skill.color || '#06B6D4'}`
          }}
        />
      </div>
    </motion.div>
  );
};
