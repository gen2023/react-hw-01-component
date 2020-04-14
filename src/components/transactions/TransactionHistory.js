import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryList from './TransactionHistoryList';

const TransactionHistory = ({ items }) => {
  const transactionHistoryClass = ['transaction-history'];

  return (
    <table className={transactionHistoryClass}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryList
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
