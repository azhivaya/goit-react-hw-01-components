import PropTypes from 'prop-types';
import {TransactionTable} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({id, type, amount, currency}) => (<tr key={id}>
                <TransactionTable>{type}</TransactionTable>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>))}
            
        </tbody>
    </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })).isRequired,
}