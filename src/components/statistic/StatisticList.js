import React from 'react';
import PropTypes from 'prop-types';

const StatisticList = ({ id, label, percentage }) => {
  const itemClass = ['item'];
  const labelClass = ['label'];
  const percentageClass = ['percentage'];

  return (
    <li className={itemClass} key={id}>
      <span className={labelClass}>{label}</span>
      <span className={percentageClass}>{percentage}%</span>
    </li>
  );
};

StatisticList.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default StatisticList;
