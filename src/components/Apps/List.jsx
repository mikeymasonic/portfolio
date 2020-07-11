import React from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';

import AwesomeSliderStyles from '../../styles/styles.scss';

const List = ({
  name,
  stack,
  description,
  github,
  site,
  image1,
  image2,
  image3,
}) => (
  <section>
    <h3>{name}</h3>
    <h4>{stack}</h4>
    <p>{description}</p>
    <a href={github} target="_blank" rel="noopener noreferrer">
      github
    </a>
    <a href={site} target="_blank" rel="noopener noreferrer">
      site
    </a>

    <AwesomeSlider scssModule={AwesomeSliderStyles}>
      <div data-src="assets/images/apps/alcherithm1.png" />
      <div data-src="assets/images/apps/alcherithm2.png" />
      <div data-src="assets/images/apps/artistsearch1.png" />
    </AwesomeSlider>
  </section>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string,
};

export default List;
