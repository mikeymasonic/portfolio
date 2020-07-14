import React from 'react';
import { media } from '../../data/data';
import MediaList from './MediaList';
import styles from './Media.css';
// import bioImage from '../../../public/assets/images/bio/bio2.jpg';
// import bioImage2 from '../../assets/images/bio2.jpg';

const Media = () => {
  // const style = { border: 0, width: '350px', height: '555px' };
  const mediaNodes = media.map((media) => {
    return <MediaList key={media.bandName} {...media} />;
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
          {/* <img className={styles.Pic} src={bioImage} alt="picture of mikey" />
          <img className={styles.Pic} src={bioImage2} alt="picture of mikey" /> */}
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
