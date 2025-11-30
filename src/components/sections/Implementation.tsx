import React from 'react';

/**
 * Implementation / How we build section component.
 * Explains the technical implementation approach, architecture, and development sprints.
 */
const Implementation: React.FC = () => {
  const sprints = [
    {
      number: 1,
      title: 'Sprint 1: Базовый функционал',
      goal: 'Базовый Telegram-бот с текстовым вводом расходов и доходов',
      tasks: [
        'Настройка Telegram Bot API',
        'Backend на Python (FastAPI/Django)',
        'PostgreSQL для хранения транзакций',
        'Обработка текстовых команд (расход/доход)',
        'Базовая структура БД и API',
      ],
    },
    {
      number: 2,
      title: 'Sprint 2: Голосовой ввод',
      goal: 'Добавление распознавания речи и автоматической категоризации',
      tasks: [
        'Интеграция Whisper API для распознавания речи',
        'Обработка голосовых сообщений',
        'Простая категоризация транзакций (LLM)',
        'Извлечение суммы, валюты, даты из текста',
        'Поддержка RU/UZ/EN языков',
      ],
    },
    {
      number: 3,
      title: 'Sprint 3: Цели и долги',
      goal: 'Расширение функционала: цели, долги, напоминания',
      tasks: [
        'Система финансовых целей',
        'Учёт долгов (кредиты, займы)',
        'Напоминания и уведомления',
        'Расчёт прогресса по целям',
        'Интеграция с транзакциями',
      ],
    },
    {
      number: 4,
      title: 'Sprint 4: Аналитика и советы',
      goal: 'AI-аналитика и персональные рекомендации на основе истории',
      tasks: [
        'Анализ истории трат (LLM-prompting)',
        'Генерация персональных советов',
        'Визуализация статистики',
        'Выявление паттернов расходов',
        'Рекомендации по экономии',
      ],
    },
    {
      number: 5,
      title: 'Sprint 5: Оптимизация и масштабирование',
      goal: 'Оптимизация производительности и подготовка к масштабированию',
      tasks: [
        'Redis для кэширования',
        'Celery для фоновых задач',
        'Мониторинг и логирование',
        'Оптимизация запросов к БД',
        'Подготовка к production-развёртыванию',
      ],
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
            Как мы планируем реализовать решение
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            Поэтапная разработка с использованием современного стека технологий и AI-инструментов для создания умного финансового помощника.
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Техническая архитектура
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Interface Card */}
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🤖</span>
                <h4 className="text-xl md:text-2xl font-bold text-accent-blue">
                  Интерфейс
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Telegram Bot API</strong> — основной интерфейс взаимодействия</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Web-интерфейс</strong> (React) — landing и будущая панель управления</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue mt-1">•</span>
                  <span>Голосовой и текстовый ввод</span>
                </li>
              </ul>
            </div>

            {/* Backend & Data Card */}
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💾</span>
                <h4 className="text-xl md:text-2xl font-bold text-accent-green">
                  Backend & Data
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  <span><strong>Python</strong> — FastAPI или Django</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  <span><strong>PostgreSQL</strong> — основное хранилище данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  <span><strong>Redis</strong> — кэширование и очереди</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  <span><strong>Celery</strong> — фоновые задачи</span>
                </li>
              </ul>
            </div>

            {/* AI Layer Card */}
            <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🧠</span>
                <h4 className="text-xl md:text-2xl font-bold text-purple-400">
                  AI слой
                </h4>
              </div>
              <ul className="space-y-3 text-text-light text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>Whisper API</strong> — распознавание речи (STT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>GPT-4.x</strong> — определение intent и извлечение данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>NLU/NLP</strong> — категоризация и анализ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Генерация персональных советов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sprints Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Поэтапный план реализации
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
