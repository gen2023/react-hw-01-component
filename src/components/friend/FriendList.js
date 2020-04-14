import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li key={friends.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
