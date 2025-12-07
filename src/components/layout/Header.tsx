import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from '../common/Logo';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header component with navigation and logo.
 * Features sticky positioning and smooth scroll navigation.
 */
const Header: React.FC = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Закрываем мобильное меню
    
    // Если мы не на главной странице, сначала переходим на главную
    if (location.pathname !== '/') {
      navigate('/');
      // Ждем немного для загрузки страницы, затем скроллим
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleDemoClick = (): void => {
    setIsMobileMenuOpen(false);
    navigate('/demo');
  };

  const handleLogoClick = (): void => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('hero');
    }
  };

  // Track scroll position to update active section (only on main page)
  useEffect(() => {
    if (location.pathname !== '/') {
      return; // Don't track sections on other pages
    }

    const handleScroll = () => {
      const sections = ['hero', 'problem-solution', 'team', 'why-us', 'roadmap', 'implementation'];
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
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo 
              variant="default"
              onClick={handleLogoClick}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {[
              { id: 'problem-solution', label: t.header.nav.problemSolution, isRoute: false },
              { id: 'demo', label: t.header.nav.demo, isRoute: true },
              { id: 'team', label: t.header.nav.team, isRoute: false },
              { id: 'why-us', label: t.header.nav.whyUs, isRoute: false },
              { id: 'roadmap', label: t.header.nav.roadmap, isRoute: false },
              { id: 'implementation', label: t.header.nav.howWeBuild, isRoute: false },
            ].map((item) => {
              const isActive = item.isRoute 
                ? location.pathname === '/demo' 
                : activeSection === item.id && location.pathname === '/';
              
              return (
                <button
                  key={item.id}
                  onClick={() => item.isRoute ? handleDemoClick() : scrollToSection(item.id)}
                  className={`glass-nav-button px-4 lg:px-5 py-2.5 text-sm lg:text-base relative z-10 ${
                    isActive ? 'active' : 'text-white/70'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 25,
                          opacity: { duration: 0.4, ease: 'easeInOut' },
                        }}
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.12) 100%)',
                          backdropFilter: 'blur(30px) saturate(200%)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 0 rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2)',
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <motion.button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  scrollToSection('hero');
                }
              }}
              className="glass-button px-5 py-2.5 text-sm md:text-base font-medium text-white rounded-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.header.cta}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-button w-10 h-10 flex items-center justify-center rounded-xl"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-card-strong rounded-3xl mt-4 mb-4 p-4 space-y-2">
                {[
                  { id: 'problem-solution', label: t.header.nav.problemSolution, isRoute: false },
                  { id: 'demo', label: t.header.nav.demo, isRoute: true },
                  { id: 'team', label: t.header.nav.team, isRoute: false },
                  { id: 'why-us', label: t.header.nav.whyUs, isRoute: false },
                  { id: 'roadmap', label: t.header.nav.roadmap, isRoute: false },
                  { id: 'implementation', label: t.header.nav.howWeBuild, isRoute: false },
                ].map((item) => {
                  const isActive = item.isRoute 
                    ? location.pathname === '/demo' 
                    : activeSection === item.id && location.pathname === '/';
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => item.isRoute ? handleDemoClick() : scrollToSection(item.id)}
                      className={`glass-nav-button w-full px-4 py-3 text-base relative z-10 text-left rounded-xl ${
                        isActive ? 'active' : 'text-white/70'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute inset-0 rounded-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 25,
                              opacity: { duration: 0.4, ease: 'easeInOut' },
                            }}
                            style={{
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.12) 100%)',
                              backdropFilter: 'blur(30px) saturate(200%)',
                              border: '1px solid rgba(255, 255, 255, 0.3)',
                              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 0 rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2)',
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

