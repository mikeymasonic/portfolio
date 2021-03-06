import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import styles from './InstallationsList.css';

//styles for modal
const customStyles = {
  content: {
    width: '95%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f0f4f7',
  },
  overlay: { zIndex: 20 },
};

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
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openOrCloseModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
    subtitle.style.color = '#d3455b';
  }

  const imageNodes = images.map((image) => {
    return <section onClick={openOrCloseModal} key={image} data-src={image} />;
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

      <section className={styles.Modal}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={openOrCloseModal}
          style={customStyles}
          contentLabel="Installation Pictures"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{name}</h2>
          <section>
            <AwesomeSlider fillParent={false} scssModule={AwesomeSliderStyles}>
              {imageNodes}
            </AwesomeSlider>
          </section>
        </Modal>
      </section>

      <section className={styles.ImageSlider}>
        <AwesomeSlider fillParent={false} scssModule={AwesomeSliderStyles}>
          {imageNodes}
        </AwesomeSlider>
      </section>
      {youTubeVideos && (
        <section className={styles.Video}>
     
          <iframe
            key={youTubeVideos}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youTubeVideos}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      )}

      {vimeoVideos && (
        <section className={styles.Video}>
          <iframe
            key={vimeoVideos}
            src={`https://player.vimeo.com/video/${vimeoVideos}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </section>
      )}
    
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
