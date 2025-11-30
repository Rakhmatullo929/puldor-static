import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header component with navigation and logo.
 * Features sticky positioning and smooth scroll navigation.
 */
const Header: React.FC = () => {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem-solution', 'interactive-demo', 'team', 'why-us', 'roadmap', 'implementation'];
      const scrollPosition = window.scrollY + 120; // Offset for header height

      let currentActive = 'hero';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // If we're in the middle or past the start of the section
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
            currentActive = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Check initial section
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform duration-200">
              Puldor
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {[
              { id: 'problem-solution', label: t.header.nav.problemSolution },
              { id: 'interactive-demo', label: 'Демо' },
              { id: 'team', label: t.header.nav.team },
              { id: 'why-us', label: t.header.nav.whyUs },
              { id: 'roadmap', label: t.header.nav.roadmap },
              { id: 'implementation', label: t.header.nav.howWeBuild },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`glass-nav-button px-4 lg:px-5 py-2.5 text-sm lg:text-base relative z-10 ${
                  activeSection === item.id ? 'active' : 'text-white/70'
                }`}
              >
                <AnimatePresence mode="wait">
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
                      }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="glass-button px-5 py-2.5 text-sm md:text-base font-medium text-white rounded-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.header.cta}</span>
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

