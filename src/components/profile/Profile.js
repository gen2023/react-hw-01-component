import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  urlImg,
  name,
  alt = 'user avater',
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  const profileClass = ['profile'];
  const descriptionClass = ['description'];
  const nameClass = ['name'];
  const tagClass = ['tag'];
  const locationClass = ['location'];
  const statsClass = ['stats'];
  const labelClass = ['label'];
  const quantityClass = ['quantity'];

  return (
    <div className={profileClass}>
      <div className={descriptionClass}>
        <img src={urlImg} alt={alt} className="avatar" />
        <p className={nameClass}>{name}</p>
        <p className={tagClass}>@{tag}</p>
        <p className={locationClass}>{location}</p>
      </div>
      <ul className={statsClass}>
        <li>
          <span className={labelClass}>Followers</span>
          <span className={quantityClass}>{followers}</span>
        </li>
        <li>
          <span className={labelClass}>Views</span>
          <span className={quantityClass}>{views}</span>
        </li>
        <li>
          <span className={labelClass}>Likes</span>
          <span className={quantityClass}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  urlImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
