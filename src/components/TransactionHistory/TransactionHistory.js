import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th>TYPE</th>
          <th>AMONT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, ind) => (
          <tr key={id} className={ind % 2 === 0 ? s.light : s.dark}>
            <td className={s.td}>{type[0].toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
