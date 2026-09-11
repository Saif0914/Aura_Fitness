import React from 'react';
import { X, CheckCircle2, Dumbbell, MapPin, Layers, Target } from 'lucide-react';
import { EquipmentItem } from '../types';

interface EquipmentModalProps {
  item: EquipmentItem | null;
  onClose: () => void;
  onBookTour: () => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({ item, onClose, onBookTour }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-[#111318] border border-zinc-800 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Brand & Category badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-500 text-black text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                {item.brand}
              </span>
              <span className="bg-zinc-800/90 text-zinc-300 text-xs px-2.5 py-1 rounded">
                {item.categoryLabel}
              </span>
            </div>
            {item.highlightTag && (
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded font-semibold">
                {item.highlightTag}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              {item.name}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Zone: <strong className="text-zinc-200">{item.facilityZone}</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Available Units: <strong className="text-zinc-200">{item.quantity} In-Club</strong></span>
              </div>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            {item.description}
          </p>

          {/* Target Anatomy */}
          <div className="bg-[#181B22] border border-zinc-800/80 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
              <Target className="w-4 h-4" />
              <span>Target Biomechanics & Muscle Groups</span>
            </div>
            <p className="text-sm text-zinc-200">{item.targetedMuscles}</p>
          </div>

          {/* Specifications */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Engineering & Performance Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              Want a certified coach to guide your first set on this station?
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookTour();
                }}
                className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs px-5 py-2.5 rounded-full transition-colors shadow-md shadow-emerald-500/20"
              >
                Book Facility Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
