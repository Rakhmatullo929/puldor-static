import React from 'react';

/**
 * Why Us section component.
 * Explains why our team is capable of implementing this product.
 * Features two-column layout: text block on the left, reason cards on the right.
 */
const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: 'Уже есть боевой опыт подобного бота',
      description: '6+ месяцев разработки и доработки прототипа бота для учёта расходов. Сейчас создаём более чистую и масштабируемую версию.',
    },
    {
      title: 'Сильный AI/ML и NLU для естественной речи',
      description: 'Опыт работы с Whisper, GPT-4.x и кастомными моделями для понимания естественного языка в контексте финансов.',
    },
    {
      title: 'Production-опыт с Telegram Bot API',
      description: 'Реальные боты в продакшене, интеграции с внешними API (AI-модели, платёжные провайдеры, хранилища).',
    },
    {
      title: 'Глубокое знание RU / UZ / EN контекста',
      description: 'Понимаем особенности финансовой культуры и языковые смеси в регионе. Бот работает с реальными пользовательскими данными.',
    },
    {
      title: 'Чёткий фокус на полезной аналитике',
      description: 'Не просто графики, а персональные подсказки и советы, основанные на реальной истории трат пользователя.',
    },
    {
      title: 'Умение дробить продукт на roadmap',
      description: 'Опыт разбиения сложных продуктов на реалистичные этапы и доведения их до релиза с измеримыми результатами.',
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Почему именно наша команда решит эту задачу
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            У нас есть не только технические навыки, но и глубокое понимание проблемы, 
            опыт работы с похожим продуктом и чёткий план реализации.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Text Block */}
          <div className="space-y-6">
            <div className="bg-dark-bg-alt border border-gray-800 rounded-xl p-6 md:p-8 hover:bg-slate-900/70 transition-all duration-300">
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4">
                Мы уже разрабатывали прототип бота для учёта расходов более 6 месяцев. 
                За это время мы прошли путь от идеи до работающего продукта, получили 
                обратную связь от пользователей и поняли, что нужно улучшить. Сейчас мы 
                создаём более чистую и масштабируемую версию, используя накопленный опыт.
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4">
                В команде собраны ключевые компетенции: сильный backend-разработчик с опытом 
                работы с high-load системами, ML-инженер, специализирующийся на NLP и NLU, 
                и человек с IELTS 8.5, который отвечает за питчинг и продуктовую логику. 
                Это сочетание позволяет нам закрыть все аспекты продукта — от технической 
                реализации до коммуникации с жюри конкурса.
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed">
                Мы хорошо понимаем локальный контекст: смесь русского, узбекского и английского 
                языков в одном чате, особенности финансовой культуры в регионе, реальные боли 
                пользователей. Это не абстрактная идея — мы знаем, с какими проблемами сталкиваются 
                люди, потому что уже работали с ними напрямую.
              </p>
            </div>
          </div>

          {/* Right: Reason Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-dark-bg-alt border border-gray-800 rounded-xl p-6 hover:-translate-y-[4px] hover:shadow-lg hover:border-accent-green/50 hover:bg-slate-900/70 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-accent-green mb-3">
                  {reason.title}
                </h3>
                <p className="text-text-light text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
