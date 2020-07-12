import React from 'react';
import { bio } from '../../data/data';
import styles from './Bio.css';
// import BioImage from '../../assets/images/michaelRomayBio.jpg';

const Bio = () => {
  // const clickThing = () => {
  //   const thing = document.getElementById(styles.biopic2);
  //   thing.style.display = 'block';
  // };

  let last_known_scroll_position = 0;
  let ticking = false;

  function doSomething(scroll_pos) {
    const thing1 = document.getElementById(styles.biopic1);
    const thing2 = document.getElementById(styles.biopic2);
    const thing3 = document.getElementById(styles.biopic3);
    const thing4 = document.getElementById(styles.biopic4);
    const thing5 = document.getElementById(styles.biopic5);
    const thing6 = document.getElementById(styles.biopic6);
    const thing7 = document.getElementById(styles.biopic7);
    const thing8 = document.getElementById(styles.biopic8);
    const thing9 = document.getElementById(styles.biopic9);
    const thing10 = document.getElementById(styles.biopic10);
    const thing11 = document.getElementById(styles.biopic11);
    if (scroll_pos >= 76 && scroll_pos < 100) {
      thing1.style.display = 'none';
      thing2.style.display = 'inline';
    } else if (scroll_pos >= 100 && scroll_pos < 200) {
      thing2.style.display = 'none';
      thing3.style.display = 'inline';
    } else if (scroll_pos >= 200 && scroll_pos < 232) {
      thing3.style.display = 'none';
      thing4.style.display = 'inline';
    } else if (scroll_pos >= 232 && scroll_pos < 260) {
      thing4.style.display = 'none';
      thing5.style.display = 'inline';
    } else if (scroll_pos >= 260 && scroll_pos < 290) {
      thing5.style.display = 'none';
      thing6.style.display = 'inline';
    } else if (scroll_pos >= 290 && scroll_pos < 320) {
      thing6.style.display = 'none';
      thing7.style.display = 'inline';
    } else if (scroll_pos >= 320 && scroll_pos < 350) {
      thing8.style.display = 'none';
      thing9.style.display = 'inline';
    } else if (scroll_pos >= 350 && scroll_pos < 380) {
      thing9.style.display = 'none';
      thing10.style.display = 'inline';
    } else if (scroll_pos >= 380 && scroll_pos < 420) {
      thing10.style.display = 'none';
      thing11.style.display = 'inline';
    } else {
      thing1.style.display = 'block';
      thing2.style.display = 'none';
      thing3.style.display = 'none';
      thing4.style.display = 'none';
      thing5.style.display = 'none';
      thing6.style.display = 'none';
      thing7.style.display = 'none';
      thing8.style.display = 'none';
      thing9.style.display = 'none';
      thing10.style.display = 'none';
      thing11.style.display = 'none';
    }
  }

  window.addEventListener('scroll', function () {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });
  return (
    <>
      <section className={styles.Bio}>
        <h1>_BIO</h1>
        <section className={styles.Content}>
          <p className={styles.BioText}>{bio.bio}</p>

          <img src="assets/images/bio/1.png" id={styles.biopic1} />
          <img src="assets/images/bio/2.png" id={styles.biopic2} />
          <img src="assets/images/bio/3.png" id={styles.biopic3} />
          <img src="assets/images/bio/4.png" id={styles.biopic4} />
          <img src="assets/images/bio/5.png" id={styles.biopic5} />
          <img src="assets/images/bio/6.png" id={styles.biopic6} />
          <img src="assets/images/bio/7.png" id={styles.biopic7} />
          <img src="assets/images/bio/8.png" id={styles.biopic8} />
          <img src="assets/images/bio/9.png" id={styles.biopic9} />
          <img src="assets/images/bio/10.png" id={styles.biopic10} />
          <img src="assets/images/bio/11.png" id={styles.biopic11} />
        </section>
      </section>
    </>
  );
};

export default Bio;
