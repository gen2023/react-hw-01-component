import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from './StatisticList';

const Statistic = ({ title, stats }) => {
  const statisticsClass = ['statistics'];
  const titleClass = ['title'];
  const statListClass = ['stat-list'];

  return (
    <section className={statisticsClass}>
      <h2 className={titleClass}>{title}</h2>

      <ul className={statListClass}>
        {stats.map(({ label, percentage }) => (
          <StatisticList label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistic.prototype = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
export default Statistic;
