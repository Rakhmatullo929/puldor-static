import React from 'react';

/**
 * Roadmap section component.
 * Shows development timeline with four stages: Idea, Prototype, MVP, and Launched.
 * Features responsive timeline design: vertical on mobile, horizontal on desktop.
 */
const Roadmap: React.FC = () => {
  const stages = [
    {
      id: 'idea',
      title: 'Idea',
      subtitle: 'Формализация концепции и технического стека',
      status: 'current',
      items: [
        'Формализация проблемы и функционала',
        'Дизайн UX-флоу для Telegram бота',
        'Определение AI-стека: Whisper для голоса, GPT-4.x / подобная LLM для intents и извлечения сущностей',
      ],
    },
    {
      id: 'prototype',
      title: 'Prototype',
      subtitle: 'Работающий бот для базового учёта расходов и доходов',
      status: 'upcoming',
      items: [
        'Работающий Telegram-бот для голосового и текстового ввода расходов/доходов',
        'Базовые категории и простой отчёт за неделю/месяц в текстовом виде',
        'Хранение данных в PostgreSQL',
        'Простая логика целей и долгов (вручную помечаем транзакции)',
      ],
    },
    {
      id: 'mvp',
      title: 'MVP',
      subtitle: 'Умная классификация, цели, долги и мультиязычность',
      status: 'upcoming',
      items: [
        'Умная классификация категорий (AI-модель + тонкая дообучаемость)',
        'Полноценные цели (копилки), долги, напоминания',
        'Ежемесячные отчёты + советы, где можно тратить меньше (на основе истории)',
        'Поддержка трёх языков одновременно в одном чате',
        'Базовая панель администрирования (для команды)',
      ],
    },
    {
      id: 'launched',
      title: 'Launched',
      subtitle: 'Production-ready продукт с масштабированием и монетизацией',
      status: 'upcoming',
      items: [
        'Масштабирование инфраструктуры (Docker, orchestrator, мониторинг)',
        'Улучшение latency, оптимизация затрат на AI',
        'Настройка платёжной модели (freemium / подписка)',
        'Расширение AI-подсказок и персонализированных рекомендаций',
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Дорожная карта
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            Мы идём от идеи к боевому продукту, поэтапно добавляя функционал и улучшая пользовательский опыт.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-green via-accent-blue to-gray-800 transform -translate-y-1/2 z-0" />

          {/* Mobile: Vertical Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-green via-accent-blue to-gray-800 z-0" />

          {/* Stages Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {stages.map((stage, index) => {
              const isCurrent = stage.status === 'current';
              const isUpcoming = stage.status === 'upcoming';

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
                        className={`w-4 h-4 rounded-full border-2 ${
                          isCurrent
                            ? 'bg-accent-green border-accent-green shadow-lg shadow-accent-green/50'
                            : 'bg-dark-bg border-gray-600'
                        }`}
                      />
                    </div>

                    {/* Desktop: Dot on top */}
                    <div className="hidden lg:flex justify-center mb-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${
                          isCurrent
                            ? 'bg-accent-green border-accent-green shadow-lg shadow-accent-green/50'
                            : 'bg-dark-bg border-gray-600'
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 bg-dark-bg-alt border rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ${
                        isCurrent
                          ? 'border-accent-green/50 shadow-accent-green/20 hover:border-accent-green/70 hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70'
                          : 'border-gray-800 hover:border-gray-700 hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70'
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
                          <span className="px-2 py-1 text-xs font-semibold bg-accent-green/20 text-accent-green rounded-full">
                            Сейчас
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
