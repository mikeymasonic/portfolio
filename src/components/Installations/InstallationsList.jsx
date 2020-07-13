import React from 'react';
import PropTypes from 'prop-types';
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

  // const youTubeNodes = youTubeVideos.map((youTubeVideo) => {
  //   return (
  //     <iframe
  //       key={youTubeVideo}
  //       width="560"
  //       height="315"
  //       src={`https://www.youtube.com/embed/${youTubeVideo}`}
  //       frameBorder="0"
  //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //       allowFullScreen
  //     ></iframe>
  //   );
  // });
  // console.log(youTubeNodes);
  // const vimeoNodes = vimeoVideos.map((vimeoVideo) => {
  //   return (
  //     <iframe
  //       key={vimeoVideo}
  //       src={`https://player.vimeo.com/video/${vimeoVideo}`}
  //       width="640"
  //       height="360"
  //       frameBorder="0"
  //       allow="autoplay; fullscreen"
  //       allowFullScreen
  //     ></iframe>
  //   );
  // });

  return (
    <section>
      <h2>{name}</h2>
      <h4>{date}</h4>
      <h4>{location}</h4>
      <section>
        <a href={github} target="_blank" rel="noopener noreferrer">
          | github |
        </a>
      </section>
      <p>{description}</p>
      <AwesomeSlider scssModule={AwesomeSliderStyles}>
        {imageNodes}
      </AwesomeSlider>

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

      {/* {youTubeVideos && { youTubeNodes }} */}
      {/* {youTubeNodes} */}

      {/* {vimeoVideos && { vimeoNodes }} */}
      {/* {vimeoNodes} */}
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
