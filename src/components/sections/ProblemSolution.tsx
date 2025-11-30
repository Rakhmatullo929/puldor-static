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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.problemSolution.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            {t.problemSolution.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Problem Card */}
          <div className="bg-dark-bg-alt border border-red-500/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-red-400">
                {t.problemSolution.problem.title}
              </h3>
            </div>
            <ul className="space-y-4 text-text-light text-base md:text-lg">
              {t.problemSolution.problem.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Solution Card */}
          <div className="bg-dark-bg-alt border border-accent-green/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-green"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-green">
                {t.problemSolution.solution.title}
              </h3>
            </div>
            <ul className="space-y-4 text-text-light text-base md:text-lg">
              {t.problemSolution.solution.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
