import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Header component with navigation and logo.
 * Features sticky positioning and smooth scroll navigation.
 */
const Header: React.FC = () => {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-gradient cursor-pointer">
              Puldor
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('problem-solution')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              {t.header.nav.problemSolution}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              {t.header.nav.team}
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              {t.header.nav.whyUs}
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              {t.header.nav.roadmap}
            </button>
            <button
              onClick={() => scrollToSection('implementation')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              {t.header.nav.howWeBuild}
            </button>
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 text-sm md:text-base font-medium bg-accent-green text-dark-bg rounded-lg hover:bg-green-500 transition-colors duration-200"
            >
              {t.header.cta}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

