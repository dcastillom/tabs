import { useTranslation } from 'react-i18next';

import { LngSelector } from '@components';
import { useResetApp } from '@hooks';
import { labels } from '@translations';

import styles from './logo.module.css';

export function Logo() {
  const { t } = useTranslation();
  const { resetApp } = useResetApp();
  return (
    <div className={styles.logoContainer}>
      <a href="#" onClick={() => resetApp()} onKeyDown={() => resetApp()}>
        <div className={styles.logo} />
      </a>
      <LngSelector />
      <h1 className={styles.title}>{t(labels.guitarChords)}</h1>
    </div>
  );
}
