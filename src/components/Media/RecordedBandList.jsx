import React from 'react';
import PropTypes from 'prop-types';
import styles from './MediaList.css';

const RecordedBandList = ({ releaseName, bandcamp }) => {
  const style = { border: 0 };

  return (
    <section className={styles.MediaList}>
      <h2 className={styles.BandName}>{releaseName}</h2>
      <section className={styles.Video}>
        <iframe
          style={style}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcamp}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`}
          seamless
        ></iframe>
      </section>
    </section>
  );
};

RecordedBandList.propTypes = {
  releaseName: PropTypes.string.isRequired,
  bandcamp: PropTypes.string.isRequired,
};

export default RecordedBandList;
