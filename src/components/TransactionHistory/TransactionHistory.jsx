import PropTypes from 'prop-types';

import {Section, Container} from 'constants/index'
import { TableRow, TableCell, TableHeading, TransactionHistoryTab } from './TransactionHistory.styled';


export function TransactionHistory({items}) {
    return <Section>
     <Container>
       <TransactionHistoryTab>
      <thead>
        <tr>
          <TableHeading >Type</TableHeading>
          <TableHeading >Amount</TableHeading>
          <TableHeading >Currency</TableHeading>
        </tr>
      </thead>
    
            <tbody>
                {items.map(({id, type, amount, currency}) => {
                    return <TableRow key={id}>
                        <TableCell >{type}</TableCell>
                        <TableCell >{amount}</TableCell>
                        <TableCell >{currency}</TableCell>
                        </TableRow>
                })}
        
      </tbody>
    </TransactionHistoryTab>
     </Container>
   </Section>
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}