import React from 'react';
import { ShieldCheck, Dumbbell, Activity, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onExploreInstruments: () => void;
  onBookTour: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreInstruments,
  onBookTour,
}) => {
  return (
    <section id="about" className="py-24 bg-[#090A0F] text-white border-b border-zinc-800">
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
            Forged For Those Who <br />
            <span className="text-emerald-400">Demand Absolute Precision</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            AURA was founded on a singular premise: commercial gyms had become crowded, poorly maintained social lounges. We engineered an athletic sanctuary where biomechanical excellence and serious recovery coexist.
          </p>
        </motion.div>

        {/* 2-Column Split: Image with Architecture + Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Gym Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/75 backdrop-blur-md border border-zinc-800">
                <div className="text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
                  Engineered Acoustics & Space
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Over 30 feet of vertical clearance with custom anti-vibration subflooring
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Tenets with clean progress meters */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-2 border-emerald-400 pl-4">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Biomechanical Integrity Over Marketing Trends
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Every rack, cable ratio, and barbell knurl is selected to protect joint capsule longevity while maximizing mechanical tension. We do not fill our floor with gimmicky fads.
              </p>
            </div>

            {/* Performance Ratios */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <span className="text-zinc-300">Olympic & Calibrated Free Weights</span>
                  <span className="text-emerald-400 font-mono">100% IWF Standard</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <span className="text-zinc-300">Zero-Motor Curve Running Decks</span>
                  <span className="text-emerald-400 font-mono">Woodway 4Front Fleet</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <span className="text-zinc-300">Hydrotherapy & Contrast Cryo Suites</span>
                  <span className="text-emerald-400 font-mono">Twin Cold Plunge & Cedar Saunas</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[90%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <span className="text-zinc-300">Continuous Fresh-Air Turnover</span>
                  <span className="text-emerald-400 font-mono">12 Exchanges / Hour</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[100%]" />
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExploreInstruments}
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-colors duration-200 shadow-md shadow-emerald-500/10"
              >
                Inspect All Instruments & Facilities
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111318] border border-zinc-800 p-6 rounded-lg"
          >
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Heavy Steel & Platforms
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Eight independent Olympic lifting cells with laser-cut uprights and solid oak inset platforms. Chalk is always welcome.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111318] border border-zinc-800 p-6 rounded-lg"
          >
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Threshold Conditioning
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              High-intensity interval gear including Concept2 Rowers, SkiErgs, BikeErgs, and Assault AirBikes with wireless heart-rate tracking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#111318] border border-zinc-800 p-6 rounded-lg"
          >
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Contrast Recovery
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sub-zero cryo cold plunges and private cedar infrared saunas accelerate cellular repair and lower central nervous system stress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#111318] border border-zinc-800 p-6 rounded-lg"
          >
            <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              24/7 Biometric Access
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Seamless keyless facial and phone access 365 days a year, with on-site staff during peak hours and full nighttime security.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
