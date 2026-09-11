import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    focus: 'strength',
    date: '',
    time: 'morning',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-[#111318] border border-zinc-800 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              VIP Tour Confirmed
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name || 'Athlete'}</strong>.
              Your private walkthrough of our 30,000 sq.ft facility and equipment testing orientation has been scheduled. Our concierge will reach out at {formData.email || 'your email'} shortly.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2.5 rounded font-semibold text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary VIP Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              Book a Facility Walkthrough
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Experience the Eleiko platforms, Woodway decks, and infrared recovery sanctuaries in person with a certified strength coach.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@example.com"
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="strength">Heavy Strength & Olympic Lifts</option>
                    <option value="cardio">Cardio & Slat-Belt Conditioning</option>
                    <option value="functional">Athletic Turf & Sled Sprinting</option>
                    <option value="recovery">Cold Plunge & Infrared Sauna</option>
                    <option value="all">Full Club & Facility Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#181B22] border border-zinc-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="morning">Morning (7:00 AM - 11:00 AM)</option>
                    <option value="afternoon">Midday (11:00 AM - 3:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="weekend">Saturday / Sunday</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded-full font-bold text-sm tracking-wide transition-colors duration-200 shadow-md shadow-emerald-500/20"
                >
                  Confirm Complimentary VIP Tour
                </button>
              </div>

              <div className="text-[11px] text-zinc-400 text-center">
                Zero obligations. Includes full 1-day pass to test equipment and hydrotherapy suite.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
