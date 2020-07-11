import React from 'react';
import { applications } from '../../data/data';
import List from './List';
import styles from './Apps.css';

const Apps = () => {
  const appNodes = applications.map((application) => {
    return <List key={application.name} {...application} />;
  });
  return (
    <>
      <section className={styles.Apps}>
        <h1>_APPS</h1>
        {appNodes}
      </section>
    </>
  );
};

export default Apps;
