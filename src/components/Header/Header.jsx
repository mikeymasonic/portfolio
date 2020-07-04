import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <Link className={styles.Logo} to="/">
          <img src={logo} />
        </Link>
        <nav className={styles.navbar}>
          <Link className={styles.navLink} to="/">
            _BIO
          </Link>
          <Link className={styles.navLink} to="/apps">
            _APPS
          </Link>
          <Link className={styles.navLink} to="/hardware">
            _HARDWARE
          </Link>
          <Link className={styles.navLink} to="/installations">
            _INSTALLATIONS
          </Link>
          <Link className={styles.navLink} to="/projects">
            _PROJECTS
          </Link>
          <Link className={styles.navLink} to="/media">
            _MEDIA
          </Link>
          <Link className={styles.navLink} to="/contact">
            _CONTACT
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
