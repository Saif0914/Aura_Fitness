import React from 'react';
import {
  Compass,
  Cpu,
  Wind,
  Layers,
  ThermometerSnowflake,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturesSectionProps {
  onExploreInstruments: () => void;
  onBookTour: () => void;
}

const features = [
  {
    icon: Compass,
    title: 'Biomechanical Movement Screen',
    subtitle: 'Every membership includes full kinetic joint mobility and posture screening with our CSCS coaches.',
    metric: 'Kinetic Screening',
  },
  {
    icon: Layers,
    title: 'Calibrated Eleiko & Rogue Steel',
    subtitle: 'Zero cast-iron wobbles. We use only Swedish calibrated steel plates with strict competition tolerances.',
    metric: 'IWF Certified',
  },
  {
    icon: Wind,
    title: 'HEPA-14 Medical Air Flow',
    subtitle: 'Constant fresh-air exchange cycles the entire 30,000 sq.ft facility every 5 minutes. No musty gym smell.',
    metric: '12x Air Turnovers/Hr',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Cryo Plunge & Cedar Saunas',
    subtitle: 'Post-session contrast immersion with chilled 38°F plunge baths and full-spectrum Finnish infrared saunas.',
    metric: '38°F Cold Plunge',
  },
  {
    icon: Cpu,
    title: 'InBody 770 Body Composition',
    subtitle: 'Multi-frequency segmental lean mass and intracellular water analytics tracking real progress.',
    metric: 'Medical Grade Scan',
  },
  {
    icon: Users,
    title: 'Capped Membership Density',
    subtitle: 'We strictly cap total active passes to ensure you never wait for a squat rack or a Woodway deck.',
    metric: 'Zero Wait Policy',
  },
];

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onExploreInstruments,
  onBookTour,
}) => {
  return (
    <section id="features" className="py-24 bg-[#0D0F14] text-white border-b border-zinc-800">
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
            Built Different. <br />
            <span className="text-emerald-400">Tested By High Performers.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            From the subfloor materials to our contrast hydrotherapy waters, every square inch of AURA was curated with zero compromise.
          </p>
        </motion.div>

        {/* Grid of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#111318] border border-zinc-800 p-8 rounded-lg flex flex-col justify-between hover:border-zinc-700 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">
                      {feat.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {feat.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  <span>Standard with all club memberships</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature showcase callout strip */}
        <div className="mt-14 p-6 sm:p-8 bg-[#141820] border border-zinc-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-emerald-500 text-black flex items-center justify-center font-bold text-xl shrink-0">
              30k
            </div>
            <div>
              <div className="text-base font-bold text-white font-display">
                Want to see all 140+ precision machines and stations?
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Review detailed specs for Eleiko, Hammer Strength, Woodway, and Plunge Pro systems.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onExploreInstruments}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-colors shrink-0 flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/10"
          >
            <span>Open Instruments Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
