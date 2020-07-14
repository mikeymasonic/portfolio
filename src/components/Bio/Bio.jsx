import React from 'react';
import { bio } from '../../data/data';
// import GifLoader from '../../global/react-gif-loader';
import bioImage from '../../assets/images/bio2.jpg';
import styles from './Bio.css';

const Bio = () => {
  return (
    <>
      <section className={styles.Bio}>
        <h1>_BIO</h1>
        <section className={styles.ImgText}>
          {/* <GifLoader
            loading={true}
            imageSrc="../../public/assets/images/bio/bio.gif"
            overlayBackground="rgba(0,0,0,0)"
          /> */}

          <img className={styles.Pic} src={bioImage} alt="picture of mikey" />

          <section className={styles.Content}>
            <p className={styles.BioText}>{bio.bio}</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Bio;
