import React from 'react';
import PropTypes from 'prop-types';
import styles from './MediaList.css';

const MediaList = ({
  bandName,
  yearsActive,
  members,
  description,
  bandcamp,
  youTubeVideos,
}) => {
  let youTubeVideoNodes;
  if (youTubeVideos){
    youTubeVideoNodes = youTubeVideos.map((youTubeVideo) => {
      return <iframe
        key={youTubeVideo}
        className={styles.iframeYT}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youTubeVideo}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>;
    });
  }
  const style = { border: 0 };
  return (
    <section className={styles.MediaList}>
      <h2 className={styles.BandName}>{bandName}</h2>
      <section className={styles.YearsText}> </section>
      <h4 className={styles.YearsActive}>{yearsActive}</h4>
      <section className={styles.Members}>
        <strong>members:</strong> {members}
      </section>
      <p className={styles.Description}>{description}</p>
      <section className={styles.Video}>
        <iframe
          className={styles.iframeBC}
          style={style}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcamp}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`}
          seamless
        ></iframe>
        { youTubeVideoNodes }
      </section>
    </section>
  );
};
MediaList.propTypes = {
  bandName: PropTypes.string.isRequired,
  yearsActive: PropTypes.string.isRequired,
  members: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bandcamp: PropTypes.string.isRequired,
  youTubeVideos: PropTypes.array
};

export default MediaList;
