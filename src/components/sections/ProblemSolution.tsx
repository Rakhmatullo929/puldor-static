import React from 'react';

/**
 * Problem & Solution section component.
 * Explains the problem with traditional expense tracking and how Puldor solves it.
 * Features two-column layout with problem (red accent) and solution (green accent) cards.
 */
const ProblemSolution: React.FC = () => {
  return (
    <section
      id="problem-solution"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Проблема → Решение
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            Классические трекеры расходов требуют много ручной работы и быстро надоедают. 
            Мы предлагаем умный подход через голос и AI.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Problem Card */}
          <div className="bg-dark-bg-alt border border-red-500/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-red-400">
                Проблема
              </h3>
            </div>
            <ul className="space-y-4 text-text-light text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Люди пытаются вести расходы в заметках, Excel или обычных приложениях, но быстро бросают.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Многим лень руками клацать категории и суммы после каждого платежа.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  В Узбекистане и СНГ часто используется смесь RU + UZ + EN — стандартные приложения плохо понимают такие данные.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Финансовые советы &quot;из воздуха&quot;, не основанные на реальной истории трат, не помогают изменить привычки.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Solution Card */}
          <div className="bg-dark-bg-alt border border-accent-green/30 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm hover:-translate-y-[4px] hover:shadow-xl hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-green"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-green">
                Наше решение
              </h3>
            </div>
            <ul className="space-y-4 text-text-light text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">•</span>
                <span>
                  Telegram-бот, который принимает голос и текст на русском, узбекском и английском.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">•</span>
                <span>
                  AI (Whisper + LLM) понимает смысл фразы: расход, доход, долг, цель, аналитика/вопрос.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">•</span>
                <span>
                  Извлекает сумму, валюту, категорию и дату, создаёт транзакции автоматически.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">•</span>
                <span>
                  Строит цели, учитывает долги, считает аналитику и даёт персональные подсказки.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">•</span>
                <span>
                  Работает прямо в Telegram — без отдельного приложения и регистрации на сайте.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
