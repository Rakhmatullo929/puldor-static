import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Roadmap section component.
 * Shows development timeline with four stages: Idea, Prototype, MVP, and Launched.
 * Features responsive timeline design: vertical on mobile, horizontal on desktop.
 */
const Roadmap: React.FC = () => {
  const { t } = useI18n();

  const stages = [
    {
      id: 'idea',
      title: t.roadmap.stages.idea.title,
      subtitle: t.roadmap.stages.idea.subtitle,
      status: 'upcoming' as const,
      items: t.roadmap.stages.idea.items,
    },
    {
      id: 'prototype',
      title: t.roadmap.stages.prototype.title,
      subtitle: t.roadmap.stages.prototype.subtitle,
      status: 'current' as const,
      items: t.roadmap.stages.prototype.items,
    },
    {
      id: 'mvp',
      title: t.roadmap.stages.mvp.title,
      subtitle: t.roadmap.stages.mvp.subtitle,
      status: 'upcoming' as const,
      items: t.roadmap.stages.mvp.items,
    },
    {
      id: 'launched',
      title: t.roadmap.stages.launched.title,
      subtitle: t.roadmap.stages.launched.subtitle,
      status: 'upcoming' as const,
      items: t.roadmap.stages.launched.items,
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg-alt to-dark-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-green to-accent-blue bg-clip-text text-transparent mb-4">
            {t.roadmap.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-blue to-gray-800/50 transform -translate-y-1/2 z-0 shadow-lg shadow-accent-green/20" />

          {/* Mobile: Vertical Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-green via-accent-blue to-gray-800/50 z-0 shadow-lg shadow-accent-green/20" />

          {/* Stages Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {stages.map((stage) => {
              const isCurrent = stage.status === 'current';

              return (
                <div
                  key={stage.id}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="flex items-start lg:flex-col lg:items-center gap-4 lg:gap-0">
                    {/* Mobile: Dot on left */}
                    <div className="lg:hidden flex-shrink-0 mt-1">
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                          isCurrent
                            ? 'bg-accent-green border-accent-green shadow-xl shadow-accent-green/50 animate-pulse'
                            : 'bg-dark-bg border-gray-600 group-hover:border-gray-500'
                        }`}
                      />
                    </div>

                    {/* Desktop: Dot on top */}
                    <div className="hidden lg:flex justify-center mb-4">
                      <div
                        className={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                          isCurrent
                            ? 'bg-accent-green border-accent-green shadow-xl shadow-accent-green/50 animate-pulse'
                            : 'bg-dark-bg border-gray-600 group-hover:border-gray-500'
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`group flex-1 glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                        isCurrent
                          ? 'hover:scale-[1.02]'
                          : 'hover:scale-[1.02]'
                      }`}
                    >
                      {/* Stage Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3
                          className={`text-xl md:text-2xl font-bold ${
                            isCurrent ? 'text-accent-green' : 'text-white'
                          }`}
                        >
                          {stage.title}
                        </h3>
                        {isCurrent && (
                          <span className="px-3 py-1 text-xs font-semibold glass-button text-accent-green rounded-full">
                            {t.roadmap.current}
                          </span>
                        )}
                      </div>

                      {/* Subtitle */}
                      <p className="text-sm md:text-base text-text-light mb-4 opacity-80">
                        {stage.subtitle}
                      </p>

                      {/* Items List */}
                      <ul className="space-y-2.5 text-text-light text-sm md:text-base">
                        {stage.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2.5"
                          >
                            <span
                              className={`mt-1.5 flex-shrink-0 ${
                                isCurrent ? 'text-accent-green' : 'text-gray-600'
                              }`}
                            >
                              •
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
