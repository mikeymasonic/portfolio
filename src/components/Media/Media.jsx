import React from 'react';
import { media } from '../../data/data';
import MediaList from './MediaList';
import styles from './Media.css';

const Media = () => {
  // const style = { border: 0, width: '350px', height: '555px' };
  const mediaNodes = media.map((media) => {
    return <MediaList key={media.bandName} {...media} />;
  });
  return (
    <>
      <section className={styles.Media}>
        <h1>_MEDIA</h1>
        <h4 className={styles.Bands}>bands I played in:</h4>
        <section className={styles.Content}>{mediaNodes}</section>
      </section>

      {/* <iframe
        style={style}
        src="https://bandcamp.com/EmbeddedPlayer/album=4267872102/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
        seamless
      ></iframe> */}
    </>
  );
};

export default Media;
