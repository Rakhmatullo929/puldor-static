import React from 'react';

/**
 * Header component with navigation and logo.
 * Features sticky positioning and smooth scroll navigation.
 */
const Header: React.FC = () => {
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
              Problem → Solution
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              Why us
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('implementation')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-light hover:text-accent-green transition-colors duration-200"
            >
              How we build
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 text-sm md:text-base font-medium bg-accent-green text-dark-bg rounded-lg hover:bg-green-500 transition-colors duration-200"
            >
              Try in Telegram
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

