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

const AppsList = ({ name, stack, description, github, site, images }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openOrCloseModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  const imageNodes = images.map((image) => {
    return <section onClick={openOrCloseModal} key={image} data-src={image} />;
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
    </section>
  );
};

AppsList.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default AppsList;
