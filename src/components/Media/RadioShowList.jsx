import React from 'react';
import styles from './MediaList.css';

const RadioShowList = () => (
  <section className={styles.MediaList}>
    <section className={styles.Radio}>
      <iframe
        width="100%"
        height="400"
        src="https://www.mixcloud.com/widget/iframe/?feed=%2Fmikeymasonic%2F"
        frameBorder="0"
      ></iframe>
    </section>
  </section>
);

export default RadioShowList;
