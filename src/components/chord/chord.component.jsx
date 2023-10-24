import { useEffect } from 'react';

import { useSearchChordsDrawChord } from '@hooks';
import { LABELS } from '@translations';

import { setChordName } from './chord.utils';

import styles from './chord.module.css';

export function Chord({ chord }) {
  const { chordName, strings, voicingID } = { ...chord };
  const selector = `${LABELS.chord}${voicingID}`;
  const { drawChord } = useSearchChordsDrawChord(selector, chord);

  useEffect(() => {
    drawChord();
  }, []);

  return (
    <div className={styles.chord}>
      <h2>{setChordName(chordName)}</h2>
      <p>{strings}</p>
      <div className={styles.img} id={selector} />
    </div>
  );
}
