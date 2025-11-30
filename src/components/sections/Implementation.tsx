import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Implementation / How we build section component.
 * Explains the technical implementation approach, architecture, and development sprints.
 */
const Implementation: React.FC = () => {
  const { t } = useI18n();

  const sprints = [
    {
      number: 1,
      title: t.implementation.sprints.sprint1.title,
      goal: t.implementation.sprints.sprint1.goal,
      tasks: t.implementation.sprints.sprint1.tasks,
    },
    {
      number: 2,
      title: t.implementation.sprints.sprint2.title,
      goal: t.implementation.sprints.sprint2.goal,
      tasks: t.implementation.sprints.sprint2.tasks,
    },
    {
      number: 3,
      title: t.implementation.sprints.sprint3.title,
      goal: t.implementation.sprints.sprint3.goal,
      tasks: t.implementation.sprints.sprint3.tasks,
    },
    {
      number: 4,
      title: t.implementation.sprints.sprint4.title,
      goal: t.implementation.sprints.sprint4.goal,
      tasks: t.implementation.sprints.sprint4.tasks,
    },
    {
      number: 5,
      title: t.implementation.sprints.sprint5.title,
      goal: t.implementation.sprints.sprint5.goal,
      tasks: t.implementation.sprints.sprint5.tasks,
    },
  ];

  return (
    <section
      id="implementation"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-bg-alt overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-blue to-purple-400 bg-clip-text text-transparent mb-4">
            {t.implementation.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.implementation.subtitle}
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            {t.implementation.architecture.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Interface Card */}
            <div className="group relative bg-gradient-to-br from-dark-bg to-dark-bg-alt border border-accent-blue/30 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🤖</span>
                  <h4 className="text-xl md:text-2xl font-bold text-accent-blue">
                    {t.implementation.architecture.interface.title}
                  </h4>
                </div>
                <ul className="space-y-3 text-text-light text-sm md:text-base">
                  {t.implementation.architecture.interface.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group/item">
                      <span className="text-accent-blue mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} className="opacity-90" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Backend & Data Card */}
            <div className="group relative bg-gradient-to-br from-dark-bg to-dark-bg-alt border border-accent-green/30 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-green/20 hover:border-accent-green/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💾</span>
                  <h4 className="text-xl md:text-2xl font-bold text-accent-green">
                    {t.implementation.architecture.backend.title}
                  </h4>
                </div>
                <ul className="space-y-3 text-text-light text-sm md:text-base">
                  {t.implementation.architecture.backend.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group/item">
                      <span className="text-accent-green mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} className="opacity-90" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Layer Card */}
            <div className="group relative bg-gradient-to-br from-dark-bg to-dark-bg-alt border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🧠</span>
                  <h4 className="text-xl md:text-2xl font-bold text-purple-400">
                    {t.implementation.architecture.ai.title}
                  </h4>
                </div>
                <ul className="space-y-3 text-text-light text-sm md:text-base">
                  {t.implementation.architecture.ai.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group/item">
                      <span className="text-purple-400 mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} className="opacity-90" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sprints Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            {t.implementation.sprints.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {sprints.map((sprint) => (
              <div
                key={sprint.number}
                className="group relative bg-gradient-to-br from-dark-bg to-dark-bg-alt border border-gray-800/50 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center border border-accent-blue/30 shadow-lg shadow-accent-blue/10 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-accent-blue font-bold text-lg">
                        {sprint.number}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {sprint.title}
                    </h4>
                  </div>
                  <p className="text-text-light text-sm md:text-base mb-4 italic opacity-80">
                    {sprint.goal}
                  </p>
                  <ul className="space-y-2 text-text-light text-xs md:text-sm">
                    {sprint.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2 group/item">
                        <span className="text-accent-green mt-1 text-lg group-hover/item:scale-125 transition-transform duration-200">✓</span>
                        <span className="opacity-90">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
