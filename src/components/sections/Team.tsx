import React from "react";
import { useI18n } from "../../i18n/I18nContext";

// Import team member photos
import rakhmatulloPhoto from "../../assets/images/team/rakhmatullo.jpg";
import mukhammadPhoto from "../../assets/images/team/mukhammad.jpg";
import nematulloPhoto from "../../assets/images/team/nematullo.jpg";
import annasPhoto from "../../assets/images/team/annas.png";

/**
 * Team section component.
 * Displays team members with their roles, skills, tech stack, and links.
 */
const Team: React.FC = () => {
  const { t } = useI18n();

  const teamMembers: Array<{
    name: string;
    title: string;
    description: string;
    techStack: string[];
    photo?: string;
  }> = [
    {
      name: t.team.members.member1.name,
      title: t.team.members.member1.title,
      description: t.team.members.member1.description,
      techStack: [
        "Python",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "Redis",
        "Docker",
        "CI/CD",
        "Telegram Bot API",
      ],
      photo: rakhmatulloPhoto,
    },
    {
      name: t.team.members.member2.name,
      title: t.team.members.member2.title,
      description: t.team.members.member2.description,
      techStack: [
        "Docker",
        "CI/CD",
        "Kubernetes",
        "Python",
        "OpenAI API",
        "Whisper",
        "GPT-4.x",
        "Monitoring",
      ],
      photo: mukhammadPhoto,
    },
    {
      name: t.team.members.member3.name,
      title: t.team.members.member3.title,
      description: t.team.members.member3.description,
      techStack: [
        "Python",
        "Django",
        "FastAPI",
        "SQL",
        "Celery",
        "External APIs",
      ],
      photo: nematulloPhoto,
    },
    {
      name: t.team.members.member4.name,
      title: t.team.members.member4.title,
      description: t.team.members.member4.description,
      techStack: [
        "English (IELTS 8.5)",
        "Product Strategy",
        "UX Writing",
        "Pitching",
      ],
      photo: annasPhoto,
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-bg-alt overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-blue to-accent-green bg-clip-text text-transparent mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-dark-bg border border-gray-800/50 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {/* Photo */}
                {member.photo && (
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-blue rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-700 shadow-xl group-hover:border-accent-blue/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent-blue font-medium">
                    {member.title}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-light text-sm leading-relaxed mb-4 opacity-90">
                  {member.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-dark-bg-alt/80 border border-gray-700/50 rounded-lg text-text-light hover:border-accent-green/50 hover:text-accent-green transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
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
