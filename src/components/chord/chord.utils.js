export const setChordName = (chordName) => {
  if (chordName) {
    return [...chordName.split(',')]
      .map((chord, i) => ([1].indexOf(i) ? `${chord}` : `${chord}#`))
      .join('')
      .replace('#', ' ')
      .replace('  ', '');
  }
  return '';
};
