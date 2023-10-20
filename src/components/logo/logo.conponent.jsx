import { useContext } from "react";
import { SearchChordsContext } from "@contexts";
import { TRANSLATIONS } from "@translations";
import styles from "./logo.module.css";

export function Logo() {
  const { setChords, setVisible } = useContext(SearchChordsContext);
  const resetApp = () => {
    setChords([]);
    setVisible(false);
    setTimeout(() => setVisible(true), 0);
  };
  return (
    <div className={styles.logoContainer}>
      <a href="#" onClick={() => resetApp()} onKeyDown={() => resetApp()}>
        <div className={styles.logo} />
      </a>
      <h1 className={styles.title}>{TRANSLATIONS.guitarChords}</h1>
    </div>
  );
}
