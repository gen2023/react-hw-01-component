import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const friendListClass = ['friend-list'];
  const itemClass = ['item'];

  return (
    <ul className={friendListClass}>
      {friends.map(friend => (
        <li className={itemClass} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
