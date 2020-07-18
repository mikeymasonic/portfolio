import React from 'react';
import PropTypes from 'prop-types';
import styles from './InstallationsList.css';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';

const InstallationsList = ({
  name,
  date,
  location,
  description,
  youTubeVideos,
  vimeoVideos,
  github,
  images,
}) => {
  const imageNodes = images.map((image) => {
    return <div key={image} data-src={image} />;
  });

  return (
    <section className={styles.InstallationsList}>
      <h2 className={styles.Name}>{name}</h2>
      <section className={styles.DateLocation}>
        <h4 className={styles.Date}>
          {date} - {location}
        </h4>
      </section>
      <section className={styles.Links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </section>
      <p>{description}</p>
      <AwesomeSlider scssModule={AwesomeSliderStyles}>
        {imageNodes}
      </AwesomeSlider>
      <section className={styles.Video}>
        {youTubeVideos && (
          <iframe
            key={youTubeVideos}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youTubeVideos}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {vimeoVideos && (
          <iframe
            key={vimeoVideos}
            src={`https://player.vimeo.com/video/${vimeoVideos}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        )}
      </section>
    </section>
  );
};

InstallationsList.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  youTubeVideos: PropTypes.string,
  vimeoVideos: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default InstallationsList;
