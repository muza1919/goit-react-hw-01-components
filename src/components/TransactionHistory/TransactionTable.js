import PropTypes from 'prop-types';
import { Transactions, Header, Row, Tdata } from './TransactionTable.styled';

export const TransactionTable = ({ rows }) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Tdata>{type}</Tdata>
              <Tdata>{amount}</Tdata>
              <Tdata>{currency}</Tdata>
            </Row>
          );
        })}
      </tbody>
    </Transactions>
  );
};

TransactionTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};