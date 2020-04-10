import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.prototype = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
export default Statistic;
