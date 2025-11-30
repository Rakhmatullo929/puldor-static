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
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg-alt to-dark-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-green to-accent-blue bg-clip-text text-transparent mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Text Block */}
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-accent-green/30 hover:shadow-xl hover:shadow-accent-green/10 transition-all duration-300">
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4 opacity-90">
                {t.whyUs.description.paragraph1}
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed mb-4 opacity-90">
                {t.whyUs.description.paragraph2}
              </p>
              <p className="text-text-light text-base md:text-lg leading-relaxed opacity-90">
                {t.whyUs.description.paragraph3}
              </p>
            </div>
          </div>

          {/* Right: Reason Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-green/20 hover:border-accent-green/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent-green shadow-lg shadow-accent-green/50"></div>
                    <h3 className="text-lg md:text-xl font-semibold text-accent-green">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-text-light text-sm md:text-base leading-relaxed opacity-90">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
