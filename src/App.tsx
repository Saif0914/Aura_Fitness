import React, { useState, useEffect } from 'react';
import { EquipmentItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InstrumentsPage } from './components/InstrumentsPage';
import { TrainersSection } from './components/TrainersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EquipmentModal } from './components/EquipmentModal';
import { TourModal } from './components/TourModal';

export function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Scroll spy for active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'instruments', 'trainers', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 selection:bg-emerald-500 selection:text-black font-sans">
      {/* Sleek, Compact Navigation Header */}
      <Header
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Single Page Flow */}
      <main>
        <Hero
          onExploreInstruments={() => handleScrollToSection('instruments')}
          onBookTour={() => setIsTourModalOpen(true)}
        />

        <AboutSection
          onExploreInstruments={() => handleScrollToSection('instruments')}
          onBookTour={() => setIsTourModalOpen(true)}
        />

        <FeaturesSection
          onExploreInstruments={() => handleScrollToSection('instruments')}
          onBookTour={() => setIsTourModalOpen(true)}
        />

        {/* Full Instruments & Facilities Showcase Section */}
        <InstrumentsPage
          onSelectItem={(item) => setSelectedEquipment(item)}
          onBookTour={() => setIsTourModalOpen(true)}
        />

        <TrainersSection onBookTour={() => setIsTourModalOpen(true)} />

        <TestimonialsSection />

        <ContactSection />
      </main>

      {/* Modern Architectural Footer */}
      <Footer
        onNavigate={() => {}}
        onScrollToSection={handleScrollToSection}
        onBookTour={() => setIsTourModalOpen(true)}
      />

      {/* Detail Modals */}
      <EquipmentModal
        item={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
        onBookTour={() => setIsTourModalOpen(true)}
      />

      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}

export default App;
