import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonialsData } from '../data/equipmentData';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const item = testimonialsData[currentIdx];

  return (
    <section id="testimonials" className="py-24 bg-[#0D0F14] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Tested Under Pressure <br />
            <span className="text-emerald-400">By Serious Athletes</span>
          </h2>
          <p className="text-base text-zinc-400 font-light">
            Read what elite competitors and dedicated professionals say about training inside AURA.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-[#111318] border border-zinc-800 rounded-2xl p-8 sm:p-12 relative"
        >
          <div className="flex items-center space-x-1 text-emerald-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-emerald-400" />
            ))}
            <span className="text-xs text-zinc-400 ml-2 font-mono">5.0 Verified Member</span>
          </div>

          <p className="text-lg sm:text-2xl text-zinc-200 font-light italic leading-relaxed mb-8">
            &ldquo;{item.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-800">
            <div className="flex items-center space-x-4">
              <img
                src={item.avatar}
                alt={item.author}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/40"
              />
              <div>
                <div className="text-base font-bold font-display text-white">{item.author}</div>
                <div className="text-xs text-emerald-400 font-medium">{item.role}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{item.achievement}</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded border border-zinc-700 bg-black/40 text-zinc-300 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded border border-zinc-700 bg-black/40 text-zinc-300 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIdx(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentIdx ? 'w-8 bg-emerald-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
