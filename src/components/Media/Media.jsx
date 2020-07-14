import React from 'react';
import { media, recordedBands } from '../../data/data';
import MediaList from './MediaList';
import RecordedBandList from './RecordedBandList';
import styles from './Media.css';

const Media = () => {
  const mediaNodes = media.map((media) => {
    return <MediaList key={media.bandName} {...media} />;
  });
  const recordedBandNodes = recordedBands.map((recordedBand) => {
    return (
      <RecordedBandList key={recordedBand.releaseName} {...recordedBand} />
    );
  });
  return (
    <>
      <section className={styles.Media}>
        <h1>_MEDIA</h1>
        <section className={styles.Top}>
          <p className={styles.Description}>
            this is the media section. it has recordings on it from current
            music projects, bands I used to be in, and albums I engineered /
            produced.
          </p>
          <section className={styles.PlayerAndTitle}>
            <h4 className={styles.Current}>current projects / demos:</h4>
            <iframe
              className={styles.SoundcloudPlayer}
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1091621725&color=%23d3455b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </section>
        </section>
        <h4 className={styles.Bands}>some bands I used to played in:</h4>
        <section className={styles.Content}>{mediaNodes}</section>
        <h4 className={styles.Bands}>
          some albums I have engineered/produced:
        </h4>
        <section className={styles.Content}>{recordedBandNodes}</section>
      </section>
    </>
  );
};

export default Media;
