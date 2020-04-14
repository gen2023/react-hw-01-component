import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryList = ({ type, amount, currency }) => (
  <Fragment>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </Fragment>
);

TransactionHistoryList.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryList;
