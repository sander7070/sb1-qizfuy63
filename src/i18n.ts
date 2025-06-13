import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationNL from './locales/nl/translation.json';
import translationEN from './locales/en/translation.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'nl',
    resources: {
      nl: { translation: translationNL },
      en: { translation: translationEN }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
