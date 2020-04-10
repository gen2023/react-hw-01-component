import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span
      class="status"
      style={{ background: isOnline === true ? 'green' : 'red' }}
    ></span>
    <img class="avatar" src={avatar} alt="" width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
