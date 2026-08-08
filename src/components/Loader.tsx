import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Sparkles, Terminal } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingPhrases = [
    "Initializing Java JVM...",
    "Loading Spring Boot Modules...",
    "Connecting MySQL Database...",
    "Mounting React Frontend...",
    "Welcoming to Harsh's Portfolio..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 600);
    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-white overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated logo icon */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-8 p-5 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.3)] backdrop-blur-md"
        >
          <Code2 className="w-12 h-12 text-indigo-400" />
          <Sparkles className="w-5 h-5 text-cyan-400 absolute -top-1 -right-1 animate-ping" />
        </motion.div>

        {/* Glowing Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
        >
          <span className="text-gradient">HARSH GUPTA</span>
        </motion.h1>

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/90 font-medium mb-8 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" /> Full Stack Java Developer
        </p>

        {/* Progress bar container */}
        <div className="w-full bg-slate-900/80 p-1.5 rounded-full border border-white/10 shadow-inner mb-4 relative overflow-hidden">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status indicator & Percentage */}
        <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono">
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="truncate pr-2 text-slate-300"
            >
              {loadingPhrases[textIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="text-cyan-400 font-bold ml-auto">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
