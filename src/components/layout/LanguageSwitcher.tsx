import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { Language } from '../../types/i18n';

/**
 * Language switcher component.
 * Displays a dropdown to switch between supported languages.
 */
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newLanguage = e.target.value as Language;
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="px-3 py-1.5 text-sm font-medium bg-dark-bg-alt border border-gray-700 rounded-lg text-text-light hover:border-accent-green transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-green/50"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

