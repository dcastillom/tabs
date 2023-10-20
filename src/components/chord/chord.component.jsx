import { useEffect } from "react";
import { CONSTANTS } from "@constants";
import { useSearchChordsDrawChord } from "@hooks";
import styles from "./chord.module.css";
import { setChordName } from "./chord.utils";

export function Chord({ chord }) {
  const { chordName, strings, voicingID } = { ...chord };
  const selector = `${CONSTANTS.chord}${voicingID}`;
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
