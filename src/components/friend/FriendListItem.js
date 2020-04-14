import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = ['status'];
  const avatarClass = ['avatar'];
  const nameClass = ['name'];

  return (
    <Fragment>
      <span
        className={statusClass}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={avatarClass} src={avatar} alt="" width="48" />
      <p className={nameClass}>{name}</p>
    </Fragment>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
