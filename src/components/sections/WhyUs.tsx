import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Why Us section component.
 * Explains why our team is capable of implementing this product.
 * Features two-column layout: text block on the left, reason cards on the right.
 */
const WhyUs: React.FC = () => {
  const { t } = useI18n();

  const reasons = [
    {
      title: t.whyUs.reasons.reason1.title,
      description: t.whyUs.reasons.reason1.description,
    },
    {
      title: t.whyUs.reasons.reason2.title,
      description: t.whyUs.reasons.reason2.description,
    },
    {
      title: t.whyUs.reasons.reason3.title,
      description: t.whyUs.reasons.reason3.description,
    },
    {
      title: t.whyUs.reasons.reason4.title,
      description: t.whyUs.reasons.reason4.description,
    },
    {
      title: t.whyUs.reasons.reason5.title,
      description: t.whyUs.reasons.reason5.description,
    },
    {
      title: t.whyUs.reasons.reason6.title,
      description: t.whyUs.reasons.reason6.description,
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
            {t.whyUs.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Text Block */}
          <div className="space-y-6">
            <div className="bg-dark-bg-alt border border-gray-800 rounded-xl p-6 md:p-8 hover:bg-slate-900/70 transition-all duration-300">
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4">
                {t.whyUs.description.paragraph1}
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4">
                {t.whyUs.description.paragraph2}
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed">
                {t.whyUs.description.paragraph3}
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
