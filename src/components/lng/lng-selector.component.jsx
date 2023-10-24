import { useChangeLng } from '@hooks';
import { lngs } from '@translations';

import styles from './lng-selector.module.css';

export const LngSelector = () => {
  const { changeLng, currentLng } = useChangeLng();
  return (
    <div className={styles.lngContainer}>
      {Object.keys(lngs).map((lng, i) => (
        <a
          href={'#'}
          className={styles.lng}
          onClick={() => changeLng(lng)}
          key={i}
          style={{ fontWeight: lng === currentLng ? 'bold' : null }}
        >
          {lngs[lng]}
        </a>
      ))}
    </div>
  );
};
