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
      id="how-we-build"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg-alt"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.implementation.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
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
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🤖</span>
                <h4 className="text-xl md:text-2xl font-bold text-accent-blue">
                  {t.implementation.architecture.interface.title}
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                {t.implementation.architecture.interface.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend & Data Card */}
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💾</span>
                <h4 className="text-xl md:text-2xl font-bold text-accent-green">
                  {t.implementation.architecture.backend.title}
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                {t.implementation.architecture.backend.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Layer Card */}
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🧠</span>
                <h4 className="text-xl md:text-2xl font-bold text-purple-400">
                  {t.implementation.architecture.ai.title}
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                {t.implementation.architecture.ai.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
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
                className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:border-accent-blue/50 hover:bg-slate-900/70 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <span className="text-accent-blue font-bold text-lg">
                      {sprint.number}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    {sprint.title}
                  </h4>
                </div>
                <p className="text-text-light text-sm md:text-base mb-4 italic">
                  {sprint.goal}
                </p>
                <ul className="space-y-2 text-text-light text-xs md:text-sm">
                  {sprint.tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">✓</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
