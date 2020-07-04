import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <section className={styles.Header}>
        <section className={styles.Logo}>
          <img src={logo} alt="michael romay logo" />
        </section>
        <nav className={styles.navbar}>
          <Link className={styles.navLink} to="/apps">
            _APPS
          </Link>
          <Link className={styles.navLink} to="/hardware">
            _HARDWARE
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Header;
