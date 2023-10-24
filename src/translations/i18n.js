import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const lng = 'lng';
export const lngs = {
  en: 'en',
  es: 'es',
};
export const defaultLng = localStorage.getItem(lng) || lngs.en;

export const labels = {
  chord: 'chord',
  search: 'search',
  label: 'label',
  placeholder: 'placeholder',
  noDrawChord: 'noDrawChord',
  submit: 'submit',
  noResults: 'noResults',
  searchSomething: 'searchSomething',
  guitarChords: 'guitarChords',
  emptySearch: 'emptySearch',
  wrongChordsPattern: 'wrongChordsPattern',
  searchGuitarChords: 'searchGuitarChords',
};

export const formLabels = {
  searchLabel: `${labels.search}${labels.label}`,
  searchPlaceholder: `${labels.search}${labels.placeholder}`,
};

export const translations = {
  [lngs.en]: {
    [labels.submit]: 'Submit',
    [labels.noResults]: 'No results',
    [labels.searchSomething]: 'Search chords',
    [labels.guitarChords]: 'guitar CHORDS',
    [labels.emptySearch]: 'Please enter some search criteria.',
    [labels.wrongChordsPattern]: 'Please enter valid search criteria.',
    [labels.searchGuitarChords]: 'Search guitar chords',
    [formLabels.searchLabel]: 'Type a chord:',
    [formLabels.searchPlaceholder]: 'C, Bm, Dsus, E7, Fmaj, G11...',
  },
  [lngs.es]: {
    [labels.submit]: 'Enviar',
    [labels.noResults]: 'Sin resultados',
    [labels.searchSomething]: 'Busca un acorde',
    [labels.guitarChords]: 'ACORDES de guitarra',
    [labels.emptySearch]: 'Escribe algún criterio de búsqueda.',
    [labels.wrongChordsPattern]: 'Por favor, busca un acorde válido.',
    [labels.searchGuitarChords]: 'Busca acordes de guitarra',
    [formLabels.placeholder]: 'Teclea un acorde:',
    [formLabels.searchPlaceholder]: 'C, Bm, Dsus, E7, Fmaj, G11...',
  },
};

const resources = {
  [lngs.en]: {
    translation: {
      ...translations[lngs.en],
    },
  },
  [lngs.es]: {
    translation: {
      ...translations[lngs.es],
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLng,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
