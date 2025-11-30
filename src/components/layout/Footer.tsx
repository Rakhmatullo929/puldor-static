import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

/**
 * Footer component with project information.
 */
const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-dark-bg-alt border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-text-light text-sm md:text-base">
            {t.footer.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

