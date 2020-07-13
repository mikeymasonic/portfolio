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
            <section className={styles.Name}>Michael Romay</section>
            <li>-human from right now</li>
            <li>-tech enthusiast/futurist</li>
            <li>-software engineer</li>
            <li>-makes music and immersive art</li>
            <li>-lives in portland, oregon</li>
          </ul>
        </section>

        <section>
          <h3>LEARN STUFF</h3>
          <hr />
          <br />
          <section className={styles.Learn}>
            I am offering free lessons / consultations / mentoring / time /
            support to creative humans, locally or remotely.
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
