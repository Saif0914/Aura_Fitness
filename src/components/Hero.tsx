import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Dumbbell } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreInstruments: () => void;
  onBookTour: () => void;
}

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85',
    tagline: 'PRECISION BIOMECHANICS & HUMAN PERFORMANCE',
    title: 'THE NEW ARCHETYPE',
    highlight: 'OF ATHLETIC EXCELLENCE',
    description:
      '30,000 square feet of world-standard Olympic platforms, Hammer Strength biomechanical stations, Woodway curved decks, and restorative hydrotherapy suites.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=85',
    tagline: 'ZERO FRICTION. ZERO EXCUSES.',
    title: 'ENGINEERED FOR',
    highlight: 'UNCOMPROMISING ATHLETES',
    description:
      'Calibrated Swedish steel, 50-yard high-traction sprint turf, and sports science guidance built for those who refuse generic workout routines.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&q=85',
    tagline: 'METABOLIC CONDITIONING & CONTRAST THERAPY',
    title: 'TRAIN HARDER.',
    highlight: 'RECOVER SMARTER.',
    description:
      'Pair high-output threshold training on Concept2 and Assault systems with cedar infrared sauna suites and 38°F cryo cold immersion plunge baths.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreInstruments, onBookTour }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-[660px] md:min-h-[720px] lg:h-[86vh] lg:min-h-[700px] lg:max-h-[920px] pt-20 flex flex-col justify-between bg-black overflow-hidden">
      {/* Background Slides with smooth fade */}
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Lighter gradient overlay for enhanced image visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Side Navigation Arrows (Middle Left & Middle Right) */}
      <button
        type="button"
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-700/80 bg-black/50 backdrop-blur-md text-zinc-300 hover:text-black hover:bg-emerald-400 hover:border-emerald-400 flex items-center justify-center transition-all duration-200 shadow-xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-700/80 bg-black/50 backdrop-blur-md text-zinc-300 hover:text-black hover:bg-emerald-400 hover:border-emerald-400 flex items-center justify-center transition-all duration-200 shadow-xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-16 lg:px-20 pt-12 pb-8 flex-1 flex flex-col justify-center items-center text-center">
        <div className="min-h-[340px] sm:min-h-[300px] flex flex-col justify-center items-center">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display mb-6 drop-shadow-xl">
              {slide.title} <br />
              <span className="text-emerald-400 drop-shadow-md">{slide.highlight}</span>
            </h1>

            {/* Body */}
            <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md">
              {slide.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreInstruments}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-full font-bold text-base tracking-wide transition-colors duration-200 flex items-center justify-center space-x-3 shadow-lg shadow-emerald-500/10"
              >
                <Dumbbell className="w-5 h-5" />
                <span>Explore Instruments & Gear</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookTour}
                className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule VIP Club Tour</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Facility Quick Stat Strip */}
      <div className="relative z-10 bg-[#0D0F14]/95 border-t border-zinc-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">30,000</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Sq.Ft Training Ground</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">140+</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Precision Instruments</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">8 Stations</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Olympic Eleiko Racks</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">24 / 7</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Biometric Keyless Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};
