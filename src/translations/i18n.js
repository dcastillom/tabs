import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TRANSLATIONS } from './constants';

export const lng = 'en';

const resources = {
  en: {
    translation: {
      ...TRANSLATIONS.en,
    },
  },
  es: {
    translation: {
      ...TRANSLATIONS.es,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
