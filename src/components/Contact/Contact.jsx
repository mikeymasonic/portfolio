import React from 'react';
import { contact } from '../../data/data';
import styles from './Contact.css';

const Contact = () => {
  return (
    <>
      <section className={styles.Contact}>
        <h1 className={styles.PageName}>_CONTACT</h1>

        <section className={styles.Content}>
          <section className={styles.Links}>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>

            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              github
            </a>

            <a href={contact.resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>

            <a
              href={contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <a
              href={contact.whateverSpace}
              target="_blank"
              rel="noopener noreferrer"
            >
              whateverSpace
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Contact;
