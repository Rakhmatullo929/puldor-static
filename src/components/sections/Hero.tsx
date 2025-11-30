import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Hero section component - main landing section with primary CTA.
 * Features badge, title, subtitle, action buttons, stats cards, and demo illustration.
 */
const Hero: React.FC = () => {
  const { t } = useI18n();
  const [animationStage, setAnimationStage] = useState<number>(0);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Автоматическая анимация с циклом
  useEffect(() => {
    const stages = [0, 1, 2, 3, 4, 5];
    let currentStageIndex = 0;

    const animate = () => {
      setAnimationStage(stages[currentStageIndex]);
      currentStageIndex = (currentStageIndex + 1) % stages.length;
    };

    // Задержки для каждого этапа (в миллисекундах)
    const delays = [2000, 3000, 2000, 2500, 3000, 1500];
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        animate();
        scheduleNext();
      }, delays[currentStageIndex] || 2000);
    };

    // Начальная задержка
    timeoutId = setTimeout(() => {
      animate();
      scheduleNext();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg via-dark-bg-alt/50 to-dark-bg px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-blue/5 animate-pulse"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-green/10 to-accent-blue/10 border border-accent-green/30 mb-6 backdrop-blur-sm shadow-lg shadow-accent-green/10 hover:shadow-accent-green/20 transition-all duration-300">
              <span className="text-sm font-medium text-gradient">
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent-green/90 to-white bg-clip-text text-transparent animate-gradient">
                {t.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-light mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
              {t.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-accent-green to-green-500 text-dark-bg rounded-lg hover:shadow-lg hover:shadow-accent-green/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10">{t.hero.button1}</span>
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="group px-8 py-4 text-lg font-semibold border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-dark-bg hover:shadow-lg hover:shadow-accent-blue/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {t.hero.button2}
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="group bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-green/20 hover:border-accent-green/30 transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.languages}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-blue/20 hover:border-accent-blue/30 transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.voiceToCategories}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <p className="text-sm md:text-base text-text-light font-medium">
                  {t.hero.stats.goalsAndAnalytics}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Demo */}
          <div className="hidden lg:block animate-fade-in-delay">
            <div className="relative bg-gradient-to-br from-accent-green/20 via-accent-blue/10 to-purple-500/20 border border-accent-green/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-accent-green/10 hover:shadow-accent-green/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent rounded-2xl"></div>
              
              {/* Animated Content Container */}
              <div className="relative bg-dark-bg/80 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm min-h-[400px] overflow-hidden">
                
                {/* Stage 0-1: Person speaking into phone */}
                {(animationStage === 0 || animationStage === 1) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 animate-fade-in">
                    {/* Person Icon with Phone */}
                    <div className="relative mb-6">
                      {/* Person Silhouette */}
                      <div className="relative">
                        {/* Head */}
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4 relative z-10 shadow-xl">
                          {/* Eyes */}
                          <div className="absolute top-6 left-6 w-2 h-2 bg-dark-bg rounded-full"></div>
                          <div className="absolute top-6 right-6 w-2 h-2 bg-dark-bg rounded-full"></div>
                          {/* Mouth (speaking) */}
                          {animationStage === 1 && (
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-dark-bg rounded-full"></div>
                          )}
                        </div>
                        
                        {/* Body */}
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto relative -mt-8"></div>
                        
                        {/* Phone in hand */}
                        <div className="absolute -right-8 top-12 transform rotate-12">
                          <div className="w-16 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700 shadow-2xl p-2 relative z-20">
                            <div className="w-full h-full bg-dark-bg rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                              {/* Microphone Icon */}
                              <svg
                                className={`w-8 h-8 ${animationStage === 1 ? 'text-accent-green' : 'text-gray-600'} transition-colors duration-300`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                                <path d="M19 10v1a7 7 0 0 1-14 0v-1h2v1a5 5 0 0 0 10 0v-1h2z" />
                              </svg>
                              
                              {/* Sound Waves Animation */}
                              {animationStage === 1 && (
                                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                                  {[...Array(6)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-1 bg-accent-green rounded-full animate-sound-wave"
                                      style={{
                                        height: `${10 + i * 6}px`,
                                        animationDelay: `${i * 0.1}s`,
                                      }}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Speaking indicator */}
                        {animationStage === 1 && (
                          <div className="absolute -left-12 top-16 transform rotate-12">
                            <div className="bg-accent-green/20 border border-accent-green/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                              <p className="text-accent-green text-xs font-medium whitespace-nowrap">
                                Говорит...
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {animationStage === 0 && (
                      <p className="text-text-light text-sm text-center opacity-70 mt-4">
                        Нажмите и говорите
                      </p>
                    )}
                    
                    {animationStage === 1 && (
                      <p className="text-accent-green text-sm text-center font-medium mt-4 animate-pulse">
                        Запись голоса...
                      </p>
                    )}
                  </div>
                )}

                {/* Stage 2-5: Telegram Interface */}
                {(animationStage >= 2) && (
                  <div className="absolute inset-0 flex flex-col animate-fade-in">
                    {/* Telegram Header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800/50">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                      <span className="text-text-light text-sm ml-2 font-medium">Telegram</span>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 space-y-4 overflow-y-auto">
                      {/* Voice Message */}
                      {(animationStage >= 2) && (
                        <div className={`animate-fade-in ${animationStage >= 4 ? 'opacity-70' : ''}`}>
                          <div className="bg-gradient-to-br from-accent-green/20 to-dark-bg-alt rounded-lg p-4 border border-accent-green/50 shadow-lg max-w-[85%]">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                                <path d="M19 10v1a7 7 0 0 1-14 0v-1h2v1a5 5 0 0 0 10 0v-1h2z" />
                              </svg>
                              <p className="text-text-light text-sm font-medium">{t.hero.demo.voiceMessage}</p>
                              <span className="text-xs text-text-light opacity-60 ml-auto">0:03</span>
                            </div>
                            <div className="flex gap-1 mt-2">
                              {[...Array(20)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1 bg-accent-green/60 rounded-full ${animationStage === 2 ? 'animate-sound-bar' : ''}`}
                                  style={{
                                    height: `${8 + (i % 5) * 3 + Math.sin(i) * 2}px`,
                                    animationDelay: animationStage === 2 ? `${i * 0.05}s` : '0s',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Processing Indicator */}
                      {animationStage === 3 && (
                        <div className="flex items-center justify-center gap-2 py-6 animate-fade-in">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <p className="text-accent-blue text-sm font-medium ml-2">
                            AI обрабатывает...
                          </p>
                        </div>
                      )}

                      {/* Result Card */}
                      {(animationStage >= 4) && (
                        <div className={`animate-slide-up ${animationStage === 4 ? '' : ''}`}>
                          <div className="bg-gradient-to-br from-accent-blue/20 to-dark-bg-alt rounded-lg p-4 border border-accent-blue/50 shadow-lg max-w-[85%] ml-auto">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="text-text-light text-sm font-medium">{t.hero.demo.autoProcessing}</p>
                            </div>
                            <div className="mt-3 space-y-2">
                              <p className="text-accent-blue text-sm font-mono font-semibold">{t.hero.demo.categoryExample}</p>
                              <div className="bg-dark-bg/50 rounded px-2 py-1">
                                <p className="text-text-light text-xs opacity-80 italic">
                                  "{t.hero.demo.voiceExample}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
