import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ urlImg, name, alt = 'user avater', tag, location }) => (
  <div class="description">
    <img src={urlImg} alt={alt} class="avatar" />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>
);

Description.prototype = {
  urlImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
