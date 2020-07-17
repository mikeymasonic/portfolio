import React from 'react';
import { applications } from '../../data/data';
import AppsList from './AppsList';
import styles from './Apps.css';

const Apps = () => {
  const appNodes = applications.map((application) => {
    return <AppsList key={application.name} {...application} />;
  });
  return (
    <>
      <section className={styles.Apps}>
        <h1 className={styles.PageName}>_APPS</h1>
        {appNodes}
      </section>
    </>
  );
};

export default Apps;
