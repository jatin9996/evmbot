import React from 'react';
import { Form } from 'react-bootstrap';

const TransactionCountInput = ({ numTransactions, setNumTransactions }) => (
  <div className="transaction-count-input">
    <Form.Group controlId="formNumTransactions">
      <Form.Label>Number of Transactions</Form.Label>
      <Form.Control type="number" value={numTransactions} onChange={e => setNumTransactions(e.target.value)} placeholder="Enter number of transactions" />
    </Form.Group>
  </div>
);

export default TransactionCountInput;
