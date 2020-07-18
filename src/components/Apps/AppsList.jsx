import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import styles from './AppsList.css';

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

const AppsList = ({
  name,
  stack,
  description,
  github,
  site,
  images,
  // image1,
  // image2,
  // image3,
}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const imageNodes = images.map((image) => {
    return <section onClick={closeModal} key={image} data-src={image} />;
  });

  return (
    <section className={styles.AppsList}>
      <h2 className={styles.AppName}>{name}</h2>

      <p className={styles.Stack}>{stack}</p>
      <section className={styles.Links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        /
        <a href={site} target="_blank" rel="noopener noreferrer">
          site
        </a>
      </section>

      <p>{description}</p>

      <section className={styles.Modal}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
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

      <section className={styles.ImageSlider} onClick={openModal}>
        <AwesomeSlider fillParent={false} scssModule={AwesomeSliderStyles}>
          {imageNodes}
        </AwesomeSlider>
      </section>

      {/* {!image3 && (
        <section className={styles.ImageSlider} onClick={openModal}>
          <AwesomeSlider scssModule={AwesomeSliderStyles}>
            <div data-src={image1} />
            <div data-src={image2} />
          </AwesomeSlider>
        </section>
      )} */}

      {/* {image3 && (
        <section className={styles.ImageSlider} onClick={openModal}>
          <AwesomeSlider scssModule={AwesomeSliderStyles}>
            <div data-src={image1} />
            <div data-src={image2} />
            <div data-src={image3} />
          </AwesomeSlider>
        </section>
      )} */}
    </section>
  );
};

AppsList.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  // image1: PropTypes.string.isRequired,
  // image2: PropTypes.string.isRequired,
  // image3: PropTypes.string,
};

export default AppsList;
