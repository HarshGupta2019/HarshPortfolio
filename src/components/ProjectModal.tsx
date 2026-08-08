import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Database, Server, Code2, Sun, CloudRain, Wind, Droplets, Calendar, ShoppingCart, Lock } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // RentHub Demo State
  const [selectedRentalItem, setSelectedRentalItem] = useState('DSLR Camera Pro');
  const [rentalDays, setRentalDays] = useState(3);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // SkyScope Weather Demo State
  const [weatherCity, setWeatherCity] = useState('Hyderabad');
  const [simulatedWeather, setSimulatedWeather] = useState({
    temp: 29,
    condition: 'Sunny & Clear',
    humidity: 62,
    wind: 14,
    pressure: 1012,
  });

  const handleCityChange = (city: string) => {
    setWeatherCity(city);
    // Simulate weather variations for different cities
    switch (city.toLowerCase()) {
      case 'london':
        setSimulatedWeather({ temp: 16, condition: 'Light Rain', humidity: 82, wind: 22, pressure: 1008 });
        break;
      case 'tokyo':
        setSimulatedWeather({ temp: 22, condition: 'Partly Cloudy', humidity: 55, wind: 10, pressure: 1015 });
        break;
      case 'new york':
        setSimulatedWeather({ temp: 24, condition: 'Clear Sky', humidity: 48, wind: 18, pressure: 1018 });
        break;
      default:
        setSimulatedWeather({ temp: 29, condition: 'Sunny & Clear', humidity: 62, wind: 14, pressure: 1012 });
        break;
    }
  };

  const calculateRentPrice = () => {
    const basePrices: Record<string, number> = {
      'DSLR Camera Pro': 450,
      'Gaming Laptop i9': 800,
      'Electric Scooter': 300,
      '4K Drone Quadcopter': 650
    };
    return (basePrices[selectedRentalItem] || 400) * rentalDays;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto bg-[#050816]/80 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0a0f24] border border-white/15 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.3)] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                {project.category}
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Project Image Banner */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent opacity-80" />
            </div>

            {/* Description & Long Bio */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Project Overview
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* LIVE INTERACTIVE PLAYGROUND / DEMO WIDGET */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-cyan-950/40 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  Live Interactive App Simulation
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ● Real-time Logic Active
                </span>
              </div>

              {/* RENTHUB INTERACTIVE SIMULATOR */}
              {project.demoType === 'renthub' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <Lock className="w-3.5 h-3.5" />
                      JWT Auth Token: <span className="text-emerald-400 font-mono font-bold">eyJhbGciOiJIUzI1NiJ9...</span>
                    </span>
                    <span className="text-slate-400">Spring Boot REST API Mock</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Select Rental Item:</label>
                      <select
                        value={selectedRentalItem}
                        onChange={(e) => setSelectedRentalItem(e.target.value)}
                        className="w-full p-2.5 rounded-xl glass-panel text-xs text-white border border-white/15 focus:outline-none focus:border-cyan-400"
                      >
                        <option value="DSLR Camera Pro" className="bg-slate-900">DSLR Camera Pro (₹450/day)</option>
                        <option value="Gaming Laptop i9" className="bg-slate-900">Gaming Laptop i9 (₹800/day)</option>
                        <option value="Electric Scooter" className="bg-slate-900">Electric Scooter (₹300/day)</option>
                        <option value="4K Drone Quadcopter" className="bg-slate-900">4K Drone Quadcopter (₹650/day)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-semibold block mb-1">Rental Duration (Days): {rentalDays}</label>
                      <input
                        type="range"
                        min="1"
                        max="14"
                        value={rentalDays}
                        onChange={(e) => setRentalDays(Number(e.target.value))}
                        className="w-full accent-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Total Calculated Rental Fee</div>
                      <div className="text-2xl font-extrabold text-cyan-300 font-mono">
                        ₹{calculateRentPrice()} <span className="text-xs text-slate-400 font-normal">INR</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setBookingSuccess(true);
                        setTimeout(() => setBookingSuccess(false), 3000);
                      }}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md flex items-center gap-1.5"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Create Booking
                    </button>
                  </div>

                  {bookingSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-bounce">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      REST API Booking Response 200 OK! Product Reserved in MySQL Database.
                    </div>
                  )}
                </div>
              )}

              {/* SKYSCOPE WEATHER INTERACTIVE SIMULATOR */}
              {project.demoType === 'skyscope' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-300 font-mono">Select City for Weather Data:</span>
                    <div className="flex gap-2">
                      {['Hyderabad', 'London', 'Tokyo', 'New York'].map((city) => (
                        <button
                          key={city}
                          onClick={() => handleCityChange(city)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                            weatherCity === city
                              ? 'bg-cyan-500 text-white shadow-md'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-cyan-500/20 border border-cyan-400/40">
                        {simulatedWeather.condition.includes('Rain') ? (
                          <CloudRain className="w-10 h-10 text-cyan-300 animate-bounce" />
                        ) : (
                          <Sun className="w-10 h-10 text-amber-300 animate-spin-slow" />
                        )}
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white font-mono">
                          {simulatedWeather.temp}°C
                        </div>
                        <div className="text-sm text-cyan-300 font-semibold">{simulatedWeather.condition}</div>
                        <div className="text-xs text-slate-400">{weatherCity}, OpenWeatherMap API Data</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-300 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-cyan-400" />
                        <span>Humidity: {simulatedWeather.humidity}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-indigo-400" />
                        <span>Wind: {simulatedWeather.wind} km/h</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400" />
                  System Architecture & Stack Layers
                </h3>
                <div className="space-y-2">
                  {project.architecture.map((arch, aIdx) => (
                    <div key={aIdx} className="p-3 rounded-xl glass-panel text-xs text-slate-300 border border-white/10 flex items-start gap-2.5">
                      <Database className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Checklist */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Implemented Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 glass-panel p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-white/10 bg-[#050816]/90 backdrop-blur-md flex items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-semibold"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md"
            >
              Close Preview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
