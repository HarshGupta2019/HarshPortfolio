import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dragonImg from '../assets/images/dragon_cursor.jpg';

// ── Firefly particle emitted on mouse move ─────────────────────────────────
interface Particle {
  id:   number;
  x:    number;
  y:    number;
  size: number;
  hue:  number;   // 180–280 cyan→purple range
}

let pid = 0;

export const CustomCursor: React.FC = () => {
  const [pos,       setPos      ] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [visible,   setVisible  ] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastEmit    = useRef(0);

  const spawnParticle = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastEmit.current < 35) return;   // throttle: ~28 particles/sec
    lastEmit.current = now;

    const p: Particle = {
      id:   pid++,
      x:    x + (Math.random() - 0.5) * 12,
      y:    y + (Math.random() - 0.5) * 12,
      size: 4 + Math.random() * 7,
      hue:  180 + Math.random() * 100,          // cyan → purple
    };

    setParticles(prev => [...prev.slice(-24), p]);          // max 25 alive
    setTimeout(() => {
      setParticles(prev => prev.filter(q => q.id !== p.id));
    }, 600);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;                               // skip on mobile/touch

    document.body.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover'));
      spawnParticle(e.clientX, e.clientY);
    };

    const onDown  = () => setIsClicked(true);
    const onUp    = () => setIsClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove',    onMove);
    window.addEventListener('mousedown',    onDown);
    window.addEventListener('mouseup',      onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove',    onMove);
      window.removeEventListener('mousedown',    onDown);
      window.removeEventListener('mouseup',      onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible, spawnParticle]);

  if (!visible) return null;

  return (
    <>
      {/* ── Fire / magic particle trail ─────────────────────────────────── */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
            initial={{ opacity: 0.9, scale: 1, x: p.x - p.size / 2, y: p.y - p.size / 2 }}
            animate={{
              opacity: 0,
              scale:   0.1,
              y:       p.y - p.size / 2 - 28 - Math.random() * 20,
              x:       p.x - p.size / 2 + (Math.random() - 0.5) * 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{
              width:     p.size,
              height:    p.size,
              background: `radial-gradient(circle, hsl(${p.hue},100%,70%) 0%, hsl(${p.hue + 30},100%,50%) 60%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 1.5}px hsl(${p.hue},100%,65%)`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── Far dreamy glow aura (lags behind most) ─────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        animate={{
          x:       pos.x - 36,
          y:       pos.y - 36,
          opacity: isHovered ? 0.05 : 0.01,
          scale:   isClicked ? 0.7 : 1,
        }}
        transition={{
          x:       { type: 'spring', stiffness: 40, damping: 14, mass: 1.8 },
          y:       { type: 'spring', stiffness: 40, damping: 14, mass: 1.8 },
          opacity: { duration: 0.3 },
          scale:   { type: 'spring', stiffness: 200, damping: 18 },
        }}
        style={{
          width:      72,
          height:     72,
          background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(139,92,246,0.12) 50%, transparent 75%)',
          filter:     'blur(10px)',
        }}
      />

      {/* ── Dragon image — follows with a slight spring lag ─────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-screen"
        animate={{
          x:      pos.x - 8,
          y:      pos.y - 8,
          scale:  isClicked ? 0.82 : isHovered ? 1.18 : 1,
          rotate: isHovered ? -12 : 0,
        }}
        transition={{
          x:      { type: 'spring', stiffness: 220, damping: 22, mass: 0.4 },
          y:      { type: 'spring', stiffness: 220, damping: 22, mass: 0.4 },
          scale:  { type: 'spring', stiffness: 300, damping: 20 },
          rotate: { type: 'spring', stiffness: 200, damping: 18 },
        }}
      >
        {/* Dragon image in a rounded shape */}
        <div
          className="relative overflow-hidden rounded-full border transition-all duration-300"
          style={{
            width:       44,
            height:      44,
            background:  'rgba(5, 8, 22, 0.4)',
            backdropFilter: 'blur(4px)',
            borderColor: isHovered ? 'rgba(6,182,212,0.7)' : 'rgba(139,92,246,0.4)',
            boxShadow:   isHovered
              ? '0 0 12px rgba(6,182,212,0.5)'
              : '0 0 8px rgba(139,92,246,0.2)',
          }}
        >
          <img
            src={dragonImg}
            alt=""
            draggable={false}
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>

        {/* Tiny hotspot dot at the actual click point */}
        <div
          className="absolute top-0 left-0 rounded-full transition-colors duration-200"
          style={{
            width:       6,
            height:      6,
            marginTop:   -1,
            marginLeft:  -1,
            background:  isHovered ? '#22d3ee' : '#a78bfa',
            boxShadow:   isHovered
              ? '0 0 6px 2px rgba(34,211,238,1)'
              : '0 0 6px 2px rgba(167,139,250,1)',
          }}
        />
      </motion.div>
    </>
  );
};
