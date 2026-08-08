import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, Mail, Phone, Github, Linkedin, Award, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, CERTIFICATES, SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumeText = () => {
    const resumeText = `
HARSH GUPTA
Email: 121119harshgupta@gmail.com | Phone: +91 9392599135
GitHub: https://github.com/HarshGupta2019 | LinkedIn: https://www.linkedin.com/in/harsh-gupta-073161353

OBJECTIVE:
${PERSONAL_INFO.aboutBio}

TECHNICAL SKILLS:
- Programming & Frameworks: Java, JavaScript, Spring Boot, Basics of DSA
- Web Development: HTML, CSS, React
- Database Management: MySQL, DBMS
- Version Control & Tools: Git, GitHub, VS Code, Postman, Figma
- Data Analytics & Productivity Tools: Data Analytics, Excel, MS Word, PowerPoint

EDUCATION:
- Computer Engineering | ST. Mary's Integrated Campus, Hyderabad (Graduating: 2027)
- XII | Chaitanya Junior College, Hyderabad (CGPA: 9.7)
- X | Kakatiya Techno School, Hyderabad (CGPA: 10.0)

ACADEMIC PROJECTS:
1. RentHub - Full Stack Rental Marketplace (Tech: React.js, Java, Spring Boot, Spring Security, JWT, MySQL, REST APIs)
2. SkyScope - WeatherNow | Real-Time Weather App (Tech: HTML, CSS, JavaScript, Geolocation API, OpenWeatherMap API)

CERTIFICATES:
- GenAI powered data analytics - Tata
- Data entry training - Flipkart
- Spring boot by Infosys
- Reactjs by Unstop
- National Tech Challenges & Hackathons Participant
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto bg-[#050816]/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0a0f24] border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(99,102,241,0.4)] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#050816] text-white print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold">Harsh Gupta — Professional Resume</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyResumeText}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied Text' : 'Copy Text'}
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-xs font-bold text-white flex items-center gap-1.5 shadow-md transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Download PDF
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Styled Printable Document Box */}
          <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-slate-900 font-sans print:p-0 print:bg-white print:text-black flex-1">
            
            {/* Resume Name & Contact Header */}
            <div className="border-b-2 border-slate-200 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile photo */}
                <div className="shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200 shadow-lg print:w-20 print:h-20">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover brightness-105 contrast-105"
                      style={{ objectPosition: '50% 10%' }}
                    />
                  </div>
                </div>
                {/* Name & contacts */}
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase mb-1">
                    HARSH GUPTA
                  </h1>
                  <p className="text-xs font-semibold text-indigo-700 uppercase tracking-widest mb-3">
                    Full Stack Java Developer · Spring Boot · React
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs font-medium text-slate-600">
                    <a href="mailto:121119harshgupta@gmail.com" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-indigo-600" /> 121119harshgupta@gmail.com
                    </a>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <a href="tel:+919392599135" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-indigo-600" /> +91 9392599135
                    </a>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <a href="https://github.com/HarshGupta2019" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                      <Github className="w-3.5 h-3.5 text-indigo-600" /> github.com/HarshGupta2019
                    </a>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <a href="https://www.linkedin.com/in/harsh-gupta-073161353" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                      <Linkedin className="w-3.5 h-3.5 text-indigo-600" /> linkedin.com/in/harsh-gupta-073161353
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-sm font-extrabold text-indigo-900 uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                OBJECTIVE
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                A tech enthusiast and quick learner aiming to bring clean code and creative solutions to life. Looking to join a team where I can grow my web development expertise and contribute meaningfully from day one.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-extrabold text-indigo-900 uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                TECHNICAL SKILLS
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li><strong className="text-slate-900">Programming & Frameworks:</strong> Java, JavaScript, Spring Boot, Basics of DSA</li>
                <li><strong className="text-slate-900">Web Development:</strong> HTML, CSS, React, Tailwind CSS</li>
                <li><strong className="text-slate-900">Database Management:</strong> MySQL, DBMS</li>
                <li><strong className="text-slate-900">Version Control & Tools:</strong> Git, GitHub, VS Code, Postman, Figma</li>
                <li><strong className="text-slate-900">Data Analytics & Tools:</strong> Data Analytics, Excel, MS Word, PowerPoint</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-extrabold text-indigo-900 uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="space-y-3 text-xs">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-slate-900">{edu.degree}</div>
                      <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-indigo-700">{edu.score}</div>
                      <div className="text-slate-500 text-[11px]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div>
              <h2 className="text-sm font-extrabold text-indigo-900 uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                ACADEMIC PROJECTS
              </h2>
              <div className="space-y-4 text-xs">
                {PROJECTS.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between font-bold text-slate-900 mb-1">
                      <span>{proj.title} — {proj.tagline}</span>
                    </div>
                    <p className="text-slate-700 mb-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="text-[11px] text-slate-600 italic">
                      <strong>Tech Stack:</strong> {proj.techStack.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-sm font-extrabold text-indigo-900 uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                CERTIFICATES & HONORS
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                {CERTIFICATES.map((cert) => (
                  <li key={cert.id}>
                    <strong className="text-slate-900">{cert.title}</strong> — {cert.issuer} ({cert.date})
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-white/10 bg-[#050816] text-center text-xs text-slate-400 print:hidden">
            Harsh Gupta Portfolio Resume Document View
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
