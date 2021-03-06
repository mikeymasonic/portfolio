import React from 'react';
import { bio } from '../../data/data';
import GifLoader from '../../global/react-gif-loader';
import bioImage from '../../assets/images/bio.gif';
import styles from './Bio.css';

const Bio = () => {
  return (
    <>
      <section className={styles.Bio}>
        <h1 className={styles.PageName}>_BIO</h1>
        <section className={styles.ImgText}>
          <GifLoader
            className={styles.Gif}
            loading={true}
            imageSrc={bioImage}
            overlayBackground="rgba(0,0,0,0)"
          />

          <section className={styles.Content}>
            <p className={styles.BioText}>{bio.bio}</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Bio;
