import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import fullscreenIcon from '../../assets/images/fullscreen.png';
import styles from './InstallationsList.css';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '95%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
  },
  overlay: { zIndex: 1000 },
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
  // const [fullscreen, setFullscreen] = useState(false);
  const imageNodes = images.map((image) => {
    return <section key={image} data-src={image} />;
  });

  // const changeFullscreen = () => {
  //   setFullscreen(!fullscreen);
  //   console.log(fullscreen);
  // };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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

      {/* <button onClick={openModal}>Open Modal</button> */}
      <section className={styles.Modal}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
          <button onClick={closeModal}>close</button>
          <div>
            I am a modal {name}
            <AwesomeSlider fillParent={false} scssModule={AwesomeSliderStyles}>
              {imageNodes}
            </AwesomeSlider>
          </div>
        </Modal>
      </section>
      <section className={styles.ImageSlider} onClick={openModal}>
        <AwesomeSlider fillParent={false} scssModule={AwesomeSliderStyles}>
          {imageNodes}
        </AwesomeSlider>
        {/* <button onClick={changeFullscreen} className={styles.btn}>
          <img src={fullscreenIcon} alt="fullscreen icon" />
        </button> */}
      </section>
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
