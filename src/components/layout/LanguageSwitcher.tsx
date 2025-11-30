import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { Language } from '../../types/i18n';

/**
 * Language switcher component.
 * Displays a modern dropdown button to switch between supported languages.
 */
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (newLanguage: Language): void => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-dark-bg-alt border border-gray-700 rounded-lg text-text-light hover:border-accent-green hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-green/50"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-bg-alt border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-left transition-colors duration-150 ${
                language === lang.code
                  ? 'bg-accent-green/20 text-accent-green'
                  : 'text-text-light hover:bg-gray-800 hover:text-accent-green'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-accent-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

