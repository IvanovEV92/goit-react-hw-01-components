import PropTypes from 'prop-types';
import styles from './transaction.module.css';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;
