import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { body_en, footer_en, header_en, home_en, shortcuts_en, snippet_en, studio_en } from './locales/en/en';
import { body_pt, footer_pt, header_pt, home_pt, shortcuts_pt, snippet_pt, studio_pt } from './locales/pt/pt';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: header_en,
          home: home_en,
          shortcuts: shortcuts_en,
          body: body_en,
          snippet: snippet_en,
          studio: studio_en,
          footer: footer_en,
        },
      },
      pt: {
        translation: {
          header: header_pt,
          home: home_pt,
          shortcuts: shortcuts_pt,
          body: body_pt,
          snippet: snippet_pt,
          studio: studio_pt,
          footer: footer_pt,
        },
      },
    },
  });

export default i18n;
