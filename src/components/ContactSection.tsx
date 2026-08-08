import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, Send, MapPin, Copy, Check, Github, Linkedin, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';

// ── Read EmailJS credentials from Vite env vars ──────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

const EMAIL_CONFIGURED =
  EMAILJS_SERVICE_ID  && EMAILJS_SERVICE_ID  !== 'your_service_id'  &&
  EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID !== 'your_template_id' &&
  EMAILJS_PUBLIC_KEY  && EMAILJS_PUBLIC_KEY  !== 'your_public_key';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const formRef    = useRef<HTMLFormElement  | null>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    from_name:    '',
    from_email:   '',
    subject:      '',
    message:      '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError,   setSubmitError  ] = useState<string | null>(null);
  const [copiedText,    setCopiedText   ] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      if (EMAIL_CONFIGURED && formRef.current) {
        // ── Real EmailJS send — delivers directly to 121119harshgupta@gmail.com ──
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID!,
          EMAILJS_TEMPLATE_ID!,
          formRef.current,
          { publicKey: EMAILJS_PUBLIC_KEY! }
        );
      } else {
        // ── Dev/demo mode: EmailJS keys not set up yet — simulate a small delay ──
        await new Promise((r) => setTimeout(r, 900));
        console.info(
          '[Portfolio] EmailJS not configured. Add VITE_EMAILJS_* vars to .env to enable real delivery.\n' +
          `  Name:    ${formData.from_name}\n` +
          `  Email:   ${formData.from_email}\n` +
          `  Subject: ${formData.subject}\n` +
          `  Message: ${formData.message}`
        );
      }

      // Celebration confetti on success
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#8B5CF6', '#10B981', '#F59E0B'],
      });

      setSubmitSuccess(true);
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);

    } catch (err: unknown) {
      console.error('[EmailJS]', err);
      const msg =
        err instanceof Error ? err.message : 'Something went wrong. Please try emailing directly.';
      setSubmitError(msg);
      setTimeout(() => setSubmitError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold text-cyan-400 mb-3 border border-cyan-500/30"
          >
            <Mail className="w-3.5 h-3.5" />
            06. GET IN TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Let's Build <span className="text-gradient">Something Great</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            Have an open position, project inquiry, or collaboration idea? Send a message and let's discuss!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact Info & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reach out directly via email or phone. I usually respond within 12 hours.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/20 text-cyan-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                      className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedText === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-4 tracking-wider">
                Find Me On Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/HarshGupta2019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-cyan-300 font-semibold text-xs flex items-center gap-2.5 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-gupta-073161353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel hover:bg-white/10 border border-white/10 hover:border-indigo-400/40 text-slate-200 hover:text-indigo-300 font-semibold text-xs flex items-center gap-2.5 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleInputChange}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Full Stack Developer Role / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hello Harsh, I'd love to connect regarding..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-cyan-200" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-cyan-200" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Banner */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  Message sent! 🎉 Harsh will get back to you soon at {PERSONAL_INFO.email}
                </motion.div>
              )}

              {/* Error Banner */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    {submitError}
                    {' '}You can also email directly:{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="underline hover:text-red-200">
                      {PERSONAL_INFO.email}
                    </a>
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
