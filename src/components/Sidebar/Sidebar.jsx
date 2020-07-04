import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <section className={styles.Sidebar}>
        <section>
          <h3>ABOUT</h3>
          <hr />
          <ul>
            <br />
            Michael Romay
            <li>-human from right now</li>
            <li>-tech enthusiast</li>
            <li>-software and audio engineer</li>
            <li>-makes music and immersive art</li>
            <li>-lives in Portland, Oregon</li>
          </ul>
        </section>

        <section>
          <h3>LEARN STUFF (FOR FREE!)</h3>
          <hr />
          <br />
          <section className={styles.Learn}>
            I am offering free lessons / conversations / consultations /
            mentoring / time / support to creative humans, locally or remotely.
            <Link className={styles.navLink} to="/learn">
              Hit me up!
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
