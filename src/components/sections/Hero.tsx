import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Hero section component - main landing section with primary CTA.
 * Features badge, title, subtitle, action buttons, stats cards, and demo illustration.
 */
const Hero: React.FC = () => {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-dark-bg-alt px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-bg-alt border border-gray-800 mb-6">
              <span className="text-sm text-text-light">
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">
                {t.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-light mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="px-8 py-4 text-lg font-semibold bg-accent-green text-dark-bg rounded-lg hover:bg-green-500 transition-colors duration-200 w-full sm:w-auto"
              >
                {t.hero.button1}
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="px-8 py-4 text-lg font-semibold border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-dark-bg transition-colors duration-200 w-full sm:w-auto"
              >
                {t.hero.button2}
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-dark-bg-alt border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.languages}
                </p>
              </div>
              <div className="bg-dark-bg-alt border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.voiceToCategories}
                </p>
              </div>
              <div className="bg-dark-bg-alt border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.goalsAndAnalytics}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Illustration */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-accent-green/20 to-accent-blue/20 border border-gray-800 rounded-xl p-8 md:p-12 backdrop-blur-sm shadow-lg">
              <div className="bg-dark-bg rounded-lg p-6 border border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-text-light text-sm ml-2">{t.hero.demo.interface}</span>
                  </div>
                  <div className="bg-dark-bg-alt rounded-lg p-4 border border-gray-800">
                    <p className="text-text-light text-sm mb-2">{t.hero.demo.voiceMessage}</p>
                    <p className="text-accent-green text-xs">{t.hero.demo.voiceExample}</p>
                  </div>
                  <div className="bg-dark-bg-alt rounded-lg p-4 border border-gray-800">
                    <p className="text-text-light text-sm mb-2">{t.hero.demo.autoProcessing}</p>
                    <p className="text-accent-blue text-xs">{t.hero.demo.categoryExample}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
