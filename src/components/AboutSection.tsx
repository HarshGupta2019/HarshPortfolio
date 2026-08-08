import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Award, Cpu, GitCommit, Clock, Sparkles, UserCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [mouseRotate, setMouseRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseRotate({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setMouseRotate({ x: 0, y: 0 });
  };

  const statIcons = [
    <Code2 className="w-5 h-5 text-indigo-400" />,
    <Award className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-purple-400" />,
    <GitCommit className="w-5 h-5 text-emerald-400" />,
    <Clock className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold text-cyan-400 mb-3 border border-cyan-500/30"
          >
            <UserCheck className="w-3.5 h-3.5" />
            01. ABOUT ME
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Engineering <span className="text-gradient">Robust Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            Full-stack developer focused on Java Spring Boot backend architectures, enterprise security, and seamless React frontend experiences.
          </motion.p>
        </div>

        {/* Main Glass Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Photo Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/10 shadow-2xl group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono mb-4">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Hyderabad, Telangana, India
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Harsh Gupta</h3>
              <p className="text-sm text-cyan-400 font-medium">Full Stack Java Developer & Engineer</p>
            </div>

            {/* Photo with subtle rotate effect */}
            <motion.div
              style={{
                transform: `rotateY(${mouseRotate.x}deg) rotateX(${mouseRotate.y}deg)`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-6"
            >
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Harsh Gupta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono glass-pill p-2.5 rounded-xl border border-white/10">
                <span>ST. Mary's Integrated Campus</span>
                <span className="text-cyan-400 font-bold">Grad: 2027</span>
              </div>
            </motion.div>

            {/* Key highlights pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                ⚡ Clean Code Advocate
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                🔒 JWT & Spring Security
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                🚀 React & Tailwind
              </span>
            </div>
          </motion.div>

          {/* Detailed Biography & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Bio Glass Box */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <Sparkles className="w-6 h-6 text-cyan-400 absolute top-6 right-6 opacity-40 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {PERSONAL_INFO.aboutBio}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                I specialize in building complete web platforms from scratch — crafting robust REST APIs with Spring Boot, managing MySQL database schemas with Hibernate ORM, and designing responsive, high-performance UIs in React.
              </p>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {STATS.map((stat, idx) => (
                <CounterCard
                  key={stat.label}
                  icon={statIcons[idx % statIcons.length]}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                  delay={idx * 0.1}
                  isInView={isInView}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Counter Card Subcomponent with Animated Number Count Up
interface CounterCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({
  icon,
  value,
  suffix,
  label,
  description,
  delay,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-panel-interactive p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
          {count}
          <span className="text-cyan-400">{suffix}</span>
        </div>
        <div className="text-xs font-bold text-slate-200 mb-0.5">{label}</div>
        <div className="text-[11px] text-slate-400">{description}</div>
      </div>
    </motion.div>
  );
};
