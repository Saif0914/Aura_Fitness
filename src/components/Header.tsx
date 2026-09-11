import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/aura_fitness_logo_1789133809712.jpg';

interface HeaderProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenTourModal: () => void;
  onScrollToSection?: (id: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'instruments', label: 'Instruments' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  setActiveNav,
  onOpenTourModal,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setActiveNav(sectionId);
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 bg-[#090A0F]/95 backdrop-blur-md border-b border-zinc-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-500/40 bg-black flex items-center justify-center shadow-sm shadow-emerald-500/20 group-hover:border-emerald-400 transition-colors">
            <img
              src={logoImg}
              alt="AURA FITNESS Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold tracking-wider text-white font-display uppercase leading-tight group-hover:text-emerald-400 transition-colors">
              AURA FITNESS
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-xs uppercase font-semibold tracking-wider transition-colors relative ${
                  isActive
                    ? 'text-emerald-400 font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            type="button"
            onClick={onOpenTourModal}
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 shadow-md shadow-emerald-500/20"
          >
            <span>Book Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F14] border-b border-zinc-800 px-5 pt-3 pb-5 space-y-1">
          <div className="flex flex-col space-y-0.5">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 rounded text-xs uppercase font-semibold tracking-wider transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-emerald-400 font-bold'
                      : 'text-zinc-300 hover:bg-zinc-800/40 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/20"
            >
              <span>Book Complimentary Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
