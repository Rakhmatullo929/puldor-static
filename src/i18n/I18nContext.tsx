import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from '../types/i18n';
import { translations } from './translations';

/**
 * I18n Context interface.
 */
interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

/**
 * I18n Context.
 */
const I18nContext = createContext<I18nContextType | undefined>(undefined);

/**
 * Props for I18nProvider component.
 */
interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

/**
 * I18n Provider component.
 * Manages language state and provides translations to all child components.
 * Persists language preference in localStorage.
 */
export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  defaultLanguage = 'ru',
}) => {
  // Get initial language from localStorage or use default
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null;
      if (saved && (saved === 'ru' || saved === 'en' || saved === 'uz')) {
        return saved;
      }
    }
    return defaultLanguage;
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Set language function
  const setLanguage = (lang: Language): void => {
    setLanguageState(lang);
  };

  // Get current translations
  const t = translations[language] || translations[defaultLanguage];

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/**
 * Hook to access i18n context.
 * @throws Error if used outside I18nProvider
 */
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

