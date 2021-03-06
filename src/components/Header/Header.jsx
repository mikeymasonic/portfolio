import React from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../data/data';
import githubIcon from '../../assets/images/Github-Icon.png';
import linkedInIcon from '../../assets/images/linked.png';
import instagramIcon from '../../assets/images/insta.png';
import styles from './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <Link className={styles.Logo} to="/">
          <img className={styles.LogoImg} src={logo} />
        </Link>

        <nav className={styles.navBar}>
          <Link className={styles.navLink} to="/">
            _BIO
          </Link>
          <Link className={styles.navLink} to="/apps">
            _APPS
          </Link>
          <Link className={styles.navLink} to="/installations">
            _INSTALLATIONS
          </Link>
          <Link className={styles.navLink} to="/media">
            _MEDIA
          </Link>
          <Link className={styles.navLink} to="/contact">
            _CONTACT
          </Link>
        </nav>
        <section className={styles.links}>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github-icon" className={styles.icons} />
          </a>
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedInIcon}
              alt="linkedin-icon"
              className={styles.icons}
            ></img>
          </a>

          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
            <img
              src={instagramIcon}
              alt="instagram-icon"
              className={styles.icons}
            ></img>
          </a>
        </section>
      </header>
    </>
  );
};

export default Header;
