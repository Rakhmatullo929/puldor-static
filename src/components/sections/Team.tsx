import React, { useState, useEffect, useRef } from "react";
import { useI18n } from "../../i18n/I18nContext";

// Import team member photos
import rakhmatulloPhoto from "../../assets/images/team/rakhmatullo.jpg";
import mukhammadPhoto from "../../assets/images/team/mukhammad.jpg";
import nematulloPhoto from "../../assets/images/team/nematullo.jpg";
import annasPhoto from "../../assets/images/team/annas.png";

/**
 * Team section component.
 * Displays team members with flip cards and detailed modal.
 */
const Team: React.FC = () => {
  const { t } = useI18n();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const modalContentRef = useRef<HTMLDivElement>(null);

  const teamMembers: Array<{
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    shortExperience: string;
    detailedExperience: any;
    techStack: string[];
    photo?: string;
    socialLinks: {
      linkedin?: string;
      github?: string;
      telegram?: string;
    };
  }> = [
    {
      name: t.team.members.member1.name,
      firstName: t.team.members.member1.firstName,
      lastName: t.team.members.member1.lastName,
      title: t.team.members.member1.title,
      description: t.team.members.member1.description,
      shortExperience: t.team.members.member1.shortExperience,
      detailedExperience: t.team.members.member1.detailedExperience,
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
      socialLinks: t.team.members.member1.socialLinks,
    },
    {
      name: t.team.members.member2.name,
      firstName: t.team.members.member2.firstName,
      lastName: t.team.members.member2.lastName,
      title: t.team.members.member2.title,
      description: t.team.members.member2.description,
      shortExperience: t.team.members.member2.shortExperience,
      detailedExperience: t.team.members.member2.detailedExperience,
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
      socialLinks: t.team.members.member2.socialLinks,
    },
    {
      name: t.team.members.member3.name,
      firstName: t.team.members.member3.firstName,
      lastName: t.team.members.member3.lastName,
      title: t.team.members.member3.title,
      description: t.team.members.member3.description,
      shortExperience: t.team.members.member3.shortExperience,
      detailedExperience: t.team.members.member3.detailedExperience,
      techStack: [
        "Python",
        "Django",
        "FastAPI",
        "SQL",
        "Celery",
        "External APIs",
      ],
      photo: nematulloPhoto,
      socialLinks: t.team.members.member3.socialLinks,
    },
    {
      name: t.team.members.member4.name,
      firstName: t.team.members.member4.firstName,
      lastName: t.team.members.member4.lastName,
      title: t.team.members.member4.title,
      description: t.team.members.member4.description,
      shortExperience: t.team.members.member4.shortExperience,
      detailedExperience: t.team.members.member4.detailedExperience,
      techStack: [
        "English (IELTS 8.5)",
        "Product Strategy",
        "UX Writing",
        "Pitching",
      ],
      photo: annasPhoto,
      socialLinks: t.team.members.member4.socialLinks,
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleCardDoubleClick = (index: number) => {
    setSelectedMember(index);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Прокручиваем модальное окно в начало при открытии
  useEffect(() => {
    if (selectedMember !== null && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedMember]);

  return (
    <>
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
            {teamMembers.map((member, index) => {
              const isFlipped = flippedCards.has(index);
              return (
                <div
                  key={index}
                  className="relative h-[500px] perspective-1000"
                  onClick={() => handleCardClick(index)}
                  onDoubleClick={() => handleCardDoubleClick(index)}
                >
                  {/* Card Container */}
                  <div
                    className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 backface-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <div className="group relative h-full glass-card-strong rounded-3xl p-5 md:p-6 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col">
                          {/* Photo */}
                          {member.photo && (
                            <div className="mb-3 flex justify-center flex-shrink-0">
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-blue rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img
                                  src={member.photo}
                                  alt={member.name}
                                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-700 shadow-xl group-hover:border-accent-blue/50 transition-all duration-300"
                                />
                              </div>
                            </div>
                          )}

                          {/* Name and Title */}
                          <div className="mb-3 flex-shrink-0">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors duration-300 line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-xs md:text-sm text-accent-blue font-medium line-clamp-2">
                              {member.title}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-text-light text-xs md:text-sm leading-relaxed mb-3 opacity-90 flex-grow line-clamp-3">
                            {member.description}
                          </p>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-3 flex-shrink-0">
                            {member.techStack && member.techStack.length > 0 ? (
                              member.techStack
                                .slice(0, 4)
                                .map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-0.5 text-[10px] font-medium glass-button rounded-md text-white/80 hover:bg-white/15 transition-all duration-200"
                                    style={{ wordBreak: 'break-word', maxWidth: '100%' }}
                                  >
                                    {tech.length > 12 ? tech.substring(0, 12) + '...' : tech}
                                  </span>
                                ))
                            ) : null}
                          </div>

                          {/* Hint */}
                          <div className="mt-auto pt-2 flex-shrink-0 border-t border-white/10">
                            <p className="text-[9px] text-white/40 text-center leading-tight">
                              <span className="block">{t.team.hints.clickToFlip}</span>
                              <span className="block">{t.team.hints.doubleClickForDetails}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 backface-hidden rotate-y-180"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="group relative h-full glass-card-strong rounded-3xl p-6 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10 rounded-3xl"></div>
                        <div className="relative h-full flex flex-col justify-center">
                          {/* Back Side Content */}
                          <div className="text-center mb-4">
                            <h3 className="text-2xl font-bold text-accent-green mb-2">
                              {member.firstName}
                            </h3>
                            <p className="text-sm text-accent-blue font-medium mb-4">
                              {member.title}
                            </p>
                          </div>

                          {/* Short Experience */}
                          <p className="text-text-light text-sm leading-relaxed mb-6 opacity-90 text-center">
                            {member.shortExperience}
                          </p>

                          {/* Tech Stack Preview */}
                          <div className="flex flex-wrap gap-2 justify-center mb-4 overflow-hidden">
                            {member.techStack
                              .slice(0, 3)
                              .map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2.5 py-1 text-xs font-medium glass-button rounded-lg text-white/80 break-words"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>

                          {/* Hint */}
                          <p className="text-xs text-text-light/50 mt-auto text-center break-words overflow-hidden px-2">
                            {t.team.hints.doubleClickForInfo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-black/60 backdrop-blur-xl overflow-y-auto"
          onClick={handleModalClick}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            className="relative glass-card-strong rounded-2xl sm:rounded-3xl max-w-5xl w-full my-auto min-h-[50vh] max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            ref={modalContentRef}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-green/10 rounded-2xl sm:rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Close Button - Fixed position */}
            <button
              onClick={closeModal}
              className="fixed sm:absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full glass-button text-white hover:bg-white/25 transition-all duration-300 z-[60] cursor-pointer shadow-lg"
              aria-label="Close modal"
              style={{ touchAction: 'manipulation' }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content - Scrollable */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 flex-1 overflow-y-auto overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
              {teamMembers[selectedMember] && (
                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                  {/* Left Column - Photo and Social */}
                  <div className="md:col-span-1">
                    {teamMembers[selectedMember].photo && (
                      <div className="mb-8 flex justify-center md:justify-start">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-green via-accent-blue to-accent-green rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                          <div className="relative">
                            <img
                              src={teamMembers[selectedMember].photo}
                              alt={teamMembers[selectedMember].name}
                              className="relative w-44 h-44 rounded-full object-cover border-4 border-accent-blue/60 shadow-2xl ring-4 ring-accent-green/20"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent-green rounded-full border-4 border-dark-bg shadow-lg"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Name and Title for Mobile */}
                    <div className="md:hidden mb-6 text-center border-b border-gray-800/50 pb-6">
                      <h2 className="text-3xl font-bold text-accent-green mb-2">
                        {teamMembers[selectedMember].firstName}{" "}
                        {teamMembers[selectedMember].lastName}
                      </h2>
                      <p className="text-lg text-accent-blue font-medium">
                        {teamMembers[selectedMember].title}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3 mb-6">
                      {teamMembers[selectedMember].socialLinks.linkedin && (
                        <a
                          href={
                            teamMembers[selectedMember].socialLinks.linkedin
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 glass-button rounded-2xl text-white hover:bg-white/15 transition-all duration-300"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {teamMembers[selectedMember].socialLinks.github && (
                        <a
                          href={teamMembers[selectedMember].socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-800/60 to-gray-800/40 hover:from-gray-700/70 hover:to-gray-700/50 backdrop-blur-sm border border-gray-700/50 hover:border-accent-green/50 rounded-xl text-text-light hover:text-accent-green transition-all duration-200 shadow-lg hover:shadow-accent-green/20"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                      {teamMembers[selectedMember].socialLinks.telegram && (
                        <a
                          href={
                            teamMembers[selectedMember].socialLinks.telegram
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 glass-button rounded-2xl text-white hover:bg-white/15 transition-all duration-300"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.686z" />
                          </svg>
                          <span>Telegram</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:col-span-2 space-y-4 sm:space-y-6">
                    {/* Name and Title for Desktop */}
                    <div className="hidden md:block border-b border-gray-800/50 pb-6">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-green via-white to-accent-blue bg-clip-text text-transparent mb-3">
                        {teamMembers[selectedMember].firstName}{" "}
                        {teamMembers[selectedMember].lastName}
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-green rounded-full"></div>
                        <p className="text-xl text-accent-blue font-medium">
                          {teamMembers[selectedMember].title}
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="glass-card rounded-2xl p-5 md:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">О себе</h3>
                          <p className="text-text-light leading-relaxed opacity-90">
                            {teamMembers[selectedMember].detailedExperience.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Stack */}
                    {teamMembers[selectedMember].detailedExperience
                      .mainStack && (
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-accent-blue mb-2 sm:mb-3">
                              {t.team.modal.mainStack}
                            </h3>
                            <p className="text-sm sm:text-base text-text-light leading-relaxed opacity-90">
                              {
                                teamMembers[selectedMember].detailedExperience
                                  .mainStack
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* DevOps Skills */}
                    {teamMembers[selectedMember].detailedExperience
                      .devopsSkills && (
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-accent-blue mb-2 sm:mb-3">
                              {t.team.modal.devopsSkills}
                            </h3>
                            <p className="text-sm sm:text-base text-text-light leading-relaxed opacity-90">
                              {
                                teamMembers[selectedMember].detailedExperience
                                  .devopsSkills
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Full-stack Skills */}
                    {teamMembers[selectedMember].detailedExperience
                      .fullstackSkills && (
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-accent-blue mb-2 sm:mb-3">
                              {t.team.modal.fullstackSkills}
                            </h3>
                            <p className="text-sm sm:text-base text-text-light leading-relaxed opacity-90">
                              {
                                teamMembers[selectedMember].detailedExperience
                                  .fullstackSkills
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* General Skills */}
                    {teamMembers[selectedMember].detailedExperience.skills && (
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-accent-blue mb-2 sm:mb-3">
                              {t.team.modal.skills}
                            </h3>
                            <p className="text-sm sm:text-base text-text-light leading-relaxed opacity-90">
                              {
                                teamMembers[selectedMember].detailedExperience
                                  .skills
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Work Ethic */}
                    <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-accent-green/20">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-accent-green mb-2 sm:mb-3">
                            {t.team.modal.workEthic}
                          </h3>
                          <p className="text-sm sm:text-base text-text-light leading-relaxed opacity-90">
                            {
                              teamMembers[selectedMember].detailedExperience
                                .workEthic
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-3 sm:pt-4 border-t border-gray-800/50">
                      <h3 className="text-base sm:text-lg font-semibold text-accent-blue mb-3 sm:mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span>Технологический стек</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                      {teamMembers[selectedMember].techStack.map(
                        (tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 text-sm font-medium glass-button rounded-xl text-white hover:bg-white/15 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        )
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;
