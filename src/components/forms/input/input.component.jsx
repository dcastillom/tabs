import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LABELS } from '@translations';

import styles from './input.module.css';

export function Input({ type = 'text', name = '', error = '', label = true }) {
  const { t } = useTranslation();
  const [isDirty, setIsDirty] = useState(false);
  const hasError = isDirty && error;
  return (
    <div className={styles.input}>
      {hasError && <p className={styles.warn}>{error}</p>}
      {label && (
        <label className={styles.label} htmlFor={name}>
          {t([`${name}${LABELS.label}`])}
        </label>
      )}
      {!label && <span className={styles.spacer} />}
      <input
        onChange={() => setIsDirty(true)}
        type={type}
        name={name}
        className={error.length && isDirty ? styles.error : null}
        placeholder={t([`${name}${LABELS.placeholder}`])}
      />
    </div>
  );
}
