import React from 'react';
import { installationsData } from '../../data/data';
import InstallationsList from './InstallationsList';
import styles from './Installations.css';

const Installations = () => {
  const installationNodes = installationsData.map((installation) => {
    return <InstallationsList key={installation.name} {...installation} />;
  });
  return (
    <>
      <section className={styles.Installations}>
        <h1>_INSTALLATIONS</h1>
        {installationNodes}
      </section>
    </>
  );
};

export default Installations;
