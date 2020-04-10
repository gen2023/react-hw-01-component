import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ followers, views, likes }) => (
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
);

Stats.prototype = {
  followers: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string,
};
export default Stats;
