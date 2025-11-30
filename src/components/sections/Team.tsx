import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Team section component.
 * Displays team members with their roles, skills, tech stack, and links.
 */
const Team: React.FC = () => {
  const { t } = useI18n();

  const teamMembers = [
    {
      name: t.team.members.member1.name,
      title: t.team.members.member1.title,
      description: t.team.members.member1.description,
      techStack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD', 'Telegram Bot API'],
    },
    {
      name: t.team.members.member2.name,
      title: t.team.members.member2.title,
      description: t.team.members.member2.description,
      techStack: ['Python', 'PyTorch', 'Transformers', 'OpenAI API', 'Whisper', 'GPT-4.x', 'NLP', 'NLU'],
    },
    {
      name: t.team.members.member3.name,
      title: t.team.members.member3.title,
      description: t.team.members.member3.description,
      techStack: ['Python', 'Django', 'FastAPI', 'SQL', 'Celery', 'External APIs'],
    },
    {
      name: t.team.members.member4.name,
      title: t.team.members.member4.title,
      description: t.team.members.member4.description,
      techStack: ['English (IELTS 8.5)', 'Product Strategy', 'UX Writing', 'Pitching'],
    },
  ];

  return (
    <section
      id="team"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-gray-800 rounded-2xl p-6 shadow-sm hover:-translate-y-[4px] hover:shadow-lg hover:bg-slate-900/70 transition-all duration-300"
            >
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent-blue font-medium">
                  {member.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-text-light text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs font-medium bg-dark-bg-alt border border-gray-700 rounded-lg text-text-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="#"
                    className="text-accent-blue hover:text-accent-green transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.team.links.linkedin}
                  </a>
                  <a
                    href="#"
                    className="text-accent-blue hover:text-accent-green transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.team.links.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
