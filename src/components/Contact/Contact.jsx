import React from 'react';
import styles from './Contact.css';

const Contact = () => {
  return (
    <>
      <section className={styles.Contact}>
        <h1>_CONTACT</h1>

        <section>michaelRomay email: github: linkedIn: instagram:</section>

        <section className={styles.Links}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          /
          <a href={site} target="_blank" rel="noopener noreferrer">
            site
          </a>
        </section>
      </section>
    </>
  );
};

export default Contact;
