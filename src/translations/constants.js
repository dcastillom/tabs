export const LABELS = {
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

export const FORM_LABELS = {
  searchLabel: `${LABELS.search}${LABELS.label}`,
  searchPlaceholder: `${LABELS.search}${LABELS.placeholder}`,
};

export const TRANSLATIONS = {
  en: {
    [LABELS.submit]: 'Submit',
    [LABELS.noResults]: 'No results',
    [LABELS.searchSomething]: 'Search chords',
    [LABELS.guitarChords]: 'guitar CHORDS',
    [LABELS.emptySearch]: 'Please enter some search criteria.',
    [LABELS.wrongChordsPattern]: 'Please enter valid search criteria.',
    [LABELS.searchGuitarChords]: 'Search guitar chords',
    [FORM_LABELS.searchLabel]: 'Type a chord:',
    [FORM_LABELS.searchPlaceholder]: 'C, Bm, Dsus, E7, Fmaj, G11...',
  },
  es: {
    [LABELS.submit]: 'Enviar',
    [LABELS.noResults]: 'Sin resultados',
    [LABELS.searchSomething]: 'Busca un acorde',
    [LABELS.guitarChords]: 'ACORDES de guitarra',
    [LABELS.emptySearch]: 'Escribe algún criterio de búsqueda.',
    [LABELS.wrongChordsPattern]: 'Por favor, busca un acorde válido.',
    [LABELS.searchGuitarChords]: 'Busca acordes de guitarra',
    [FORM_LABELS.placeholder]: 'Teclea un acorde:',
    [FORM_LABELS.searchPlaceholder]: 'C, Bm, Dsus, E7, Fmaj, G11...',
  },
};
