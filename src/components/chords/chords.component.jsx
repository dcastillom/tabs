import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Chord } from '@components';
import { SearchChordsContext } from '@contexts';
import { LABELS } from '@translations';

import styles from './chords.module.css';

export function Chords({ chords }) {
  return (
    <div className={styles.chords}>
      {chords.map((chord) => (
        <Chord key={chord?.chordName} chord={chord} />
      ))}
    </div>
  );
}

export function NoChords() {
  const { t } = useTranslation();
  const { searchChordsIsDirty } = { ...useContext(SearchChordsContext) };
  const isDirty = searchChordsIsDirty?.current;
  const className = isDirty ? styles.noResults : styles.searchSomething;
  const label = isDirty ? t(LABELS.noResults) : t(LABELS.searchSomething);
  return <div className={className}>{label}</div>;
}

export function SearchChordsResults({ chords }) {
  return (
    <main className={styles.main}>
      {chords.length ? (
        <Chords chords={chords} />
      ) : (
        <NoChords className={styles.noChords} />
      )}
    </main>
  );
}
