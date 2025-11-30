import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Problem & Solution section component.
 * Explains the problem with traditional expense tracking and how Puldor solves it.
 * Features two-column layout with problem (red accent) and solution (green accent) cards.
 */
const ProblemSolution: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id="problem-solution"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-bg-alt overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-green to-white bg-clip-text text-transparent mb-4">
            {t.problemSolution.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.problemSolution.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Problem Card */}
          <div className="group relative glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">
                  {t.problemSolution.problem.title}
                </h3>
              </div>
              <ul className="space-y-4 text-text-light text-base md:text-lg">
                {t.problemSolution.problem.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="text-red-500 mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Solution Card */}
          <div className="group relative glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent-green shadow-lg shadow-accent-green/50 animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent-green">
                  {t.problemSolution.solution.title}
                </h3>
              </div>
              <ul className="space-y-4 text-text-light text-base md:text-lg">
                {t.problemSolution.solution.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="text-accent-green mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
