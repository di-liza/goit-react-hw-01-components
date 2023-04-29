import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({items}) {
    return <section>
     <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.tableHeading}>Type</th>
        <th className={css.tableHeading}>Amount</th>
        <th className={css.tableHeading}>Currency</th>
      </tr>
    </thead>
  
          <tbody>
              {items.map(({id, type, amount, currency}) => {
                  return <tr key={id}>
                      <td className={css.tableCell}>{type}</td>
                      <td className={css.tableCell}>{amount}</td>
                      <td className={css.tableCell}>{currency}</td>
                      </tr>
              })}
      
    </tbody>
  </table>
   </section>
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}