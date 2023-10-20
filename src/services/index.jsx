export const searchChords = async (search) => {
  if (search) {
    const mappedChords = (chords) => [
      ...chords.map((chord) => {
        const { chordName, fingering, strings, voicingID } = chord;
        return {
          voicingID,
          chordName,
          fingering,
          strings,
        };
      }),
    ];
    try {
      const response = await fetch(
        `https://api.uberchord.com/v1/chords?nameLike=${search}`,
      );
      const json = await response.json();
      return mappedChords(json);
    } catch (error) {
      console.error(error);
    }
  }
  return [];
};
