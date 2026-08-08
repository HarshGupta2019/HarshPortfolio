import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, School, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'FaGraduationCap':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'FaSchool':
        return <School className="w-6 h-6 text-indigo-400" />;
      default:
        return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="education" ref={sectionRef} className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold text-cyan-400 mb-3 border border-cyan-500/30"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            03. ACADEMIC JOURNEY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            My academic groundwork in Computer Engineering, mathematics, and analytical problem-solving.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-32 space-y-12">
          
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Date/Period Tag for Desktop */}
              <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                  {item.period}
                </span>
              </div>

              {/* Glass Card */}
              <div className="glass-panel-interactive p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shadow-md">
                      {getEducationIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.institution} ({item.location})
                      </p>
                    </div>
                  </div>

                  {/* Score Badge */}
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm shadow-lg self-start sm:self-center">
                    <Award className="w-4 h-4 text-cyan-400" />
                    {item.score}
                  </div>
                </div>

                {/* Mobile Period Tag */}
                <div className="sm:hidden flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mt-4 pt-4 border-t border-white/10">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
