import { useState } from "react";
import { CONSTANTS } from "@constants";
import { TRANSLATIONS } from "@translations";
import styles from "./input.module.css";

export function Input({ type = "text", name = "", error = "", label = true }) {
  const [isDirty, setIsDirty] = useState(false);
  const hasError = isDirty && error;
  return (
    <div className={styles.input}>
      {hasError && <p className={styles.warn}>{error}</p>}
      {label && (
        <label className={styles.label} htmlFor={name}>
          {TRANSLATIONS[`${name}${CONSTANTS.label}`]}
        </label>
      )}
      {!label && <span className={styles.spacer} />}
      <input
        onChange={() => setIsDirty(true)}
        type={type}
        name={name}
        className={error.length && isDirty ? styles.error : null}
        placeholder={TRANSLATIONS[`${name}${CONSTANTS.placeholder}`]}
      />
    </div>
  );
}
