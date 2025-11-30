import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import Logo from '../common/Logo';

/**
 * Footer component with project information.
 */
const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="relative py-8 md:py-12 overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-blue/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Logo variant="default" />
          
          {/* Text */}
          <p className="text-text-light text-sm md:text-base opacity-80 max-w-2xl">
            {t.footer.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

