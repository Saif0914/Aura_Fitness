import React, { useState } from 'react';
import { Award, ChevronRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { trainersData } from '../data/equipmentData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onBookTour: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTour }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="py-24 bg-[#090A0F] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Coached By Olympic Specialists <br />
            <span className="text-emerald-400">& Doctors of Physical Therapy</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            No generic rep counters. Our coaching staff holds advanced master’s degrees and certifications in CSCS, FRC joint mobility, and USAW Olympic weightlifting.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111318] border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-zinc-950">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[25%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-black/80 backdrop-blur-sm text-emerald-400 font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/20">
                    {trainer.experience}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-0.5">
                    {trainer.name}
                  </h3>
                  <div className="text-xs text-emerald-400 font-semibold mb-2">
                    {trainer.role}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Specialty: <strong className="text-zinc-300 font-medium">{trainer.specialty}</strong>
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Credentials & Certifications
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="bg-[#181B22] text-zinc-300 text-[10px] px-2 py-0.5 rounded border border-zinc-800"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={onBookTour}
                    className="w-full bg-[#181B22] hover:bg-emerald-500 hover:text-black text-zinc-200 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center justify-center space-x-1.5"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Request Assessment Session</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
