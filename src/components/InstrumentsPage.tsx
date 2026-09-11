import React, { useMemo } from 'react';
import {
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { EquipmentItem } from '../types';
import { equipmentList, facilityZones } from '../data/equipmentData';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

interface InstrumentsPageProps {
  onSelectItem: (item: EquipmentItem) => void;
  onBookTour: () => void;
  onBackToClub?: () => void;
}

export const InstrumentsPage: React.FC<InstrumentsPageProps> = ({
  onSelectItem,
  onBookTour,
  onBackToClub,
}) => {
  // Convert all equipment directly to CircularGallery items
  const galleryItems: GalleryItem[] = useMemo(() => {
    return equipmentList.map((item) => ({
      id: item.id,
      common: item.name,
      binomial: `${item.brand} • ${item.categoryLabel}`,
      photo: {
        url: item.image,
        text: item.description,
        pos: 'center',
        by: item.targetedMuscles,
      },
      badge: item.brand,
      tag: item.highlightTag,
      detail: item.targetedMuscles,
      zone: item.facilityZone,
      data: item,
    }));
  }, []);

  return (
    <section id="instruments" className="py-24 bg-[#090A0F] text-white border-b border-zinc-800 scroll-mt-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Instruments, Systems & <br />
            <span className="text-emerald-400">Architectural Facilities</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Every station inside AURA is engineered for optimal force vectors, joint longevity, and metabolic threshold development. Explore our Olympic-grade platforms, curved treadmills, and contrast recovery suites.
          </p>
        </motion.div>
      </div>

      {/* Facility Zones Architecture Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Four Specialized Performance Arenas
            </h2>
          </div>
          <div className="text-xs text-zinc-400 mt-2 md:mt-0">
            Zoned acoustics, climate-calibrated air, and specialized high-traction flooring
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityZones.map((zone, idx) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#111318] border border-zinc-800/90 rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-44 overflow-hidden bg-black">
                <img
                  src={zone.image}
                  alt={zone.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="bg-black/70 backdrop-blur-sm text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/20">
                    {zone.areaSqFt}
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-zinc-300 font-mono px-2 py-0.5 rounded">
                    {zone.equipmentCount}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {zone.subtitle}
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {zone.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Equipment Showcase Directory Section - Full Screen Width */}
      <div className="w-full py-12 overflow-hidden">
        {/* Subtitle at the left corner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
            All Equipment & facilities
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Explore our curated inventory of Olympic-grade machinery and performance systems
          </p>
        </div>

        {/* 3D Circular Gallery - Full Screen Viewport Width */}
        <div className="relative w-full overflow-hidden">
          <CircularGallery
            items={galleryItems}
            onSelectItem={(item) => onSelectItem(item.data || item)}
          />
        </div>
      </div>

      {/* Facility Standards Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 bg-[#111318] border border-zinc-800 rounded-xl p-8 sm:p-10"
        >
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-2">
              Facility Sanitation & Maintenance Protocols
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              We uphold strict medical-grade sanitation, continuous air replacement, and quarterly factory recalibration across all machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-[#181B22] rounded-lg border border-zinc-800/60">
              <div className="text-emerald-400 font-mono text-xl font-bold mb-1">12x / Hour</div>
              <div className="text-sm font-semibold text-white mb-1">HEPA-14 Air Turnovers</div>
              <p className="text-xs text-zinc-400">
                100% fresh outside air exchanged every 5 minutes to eliminate CO2 stagnation.
              </p>
            </div>

            <div className="p-4 bg-[#181B22] rounded-lg border border-zinc-800/60">
              <div className="text-emerald-400 font-mono text-xl font-bold mb-1">&plusmn;10 Grams</div>
              <div className="text-sm font-semibold text-white mb-1">Calibrated Barbell Plates</div>
              <p className="text-xs text-zinc-400">
                Swedish competition bumper discs verified for precise competition tolerances.
              </p>
            </div>

            <div className="p-4 bg-[#181B22] rounded-lg border border-zinc-800/60">
              <div className="text-emerald-400 font-mono text-xl font-bold mb-1">38&deg;F Steady</div>
              <div className="text-sm font-semibold text-white mb-1">Ozone Sanitized Plunge</div>
              <p className="text-xs text-zinc-400">
                Continuous micron circulation and natural ozone for crystal-pure water.
              </p>
            </div>

            <div className="p-4 bg-[#181B22] rounded-lg border border-zinc-800/60">
              <div className="text-emerald-400 font-mono text-xl font-bold mb-1">15mm Oak</div>
              <div className="text-sm font-semibold text-white mb-1">Acoustic Vibration Foam</div>
              <p className="text-xs text-zinc-400">
                Zero rebound shock to joints on Olympic lifts and plyometric box landings.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-300 text-center sm:text-left">
              Ready to test this gear? Schedule a private walkthrough and complimentary training pass.
            </div>
            <button
              type="button"
              onClick={onBookTour}
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-colors duration-200 shrink-0 shadow-md shadow-emerald-500/10"
            >
              Book Complimentary Facility Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
