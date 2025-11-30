import React from 'react';

/**
 * Footer component with project information.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg-alt border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-text-light text-sm md:text-base">
            AI500 demo · <span className="text-accent-green font-semibold">Puldor</span> — AI-powered Telegram expense assistant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

