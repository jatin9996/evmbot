import React from 'react';
import { Form } from 'react-bootstrap';

const TokenPairSelector = ({ tokenPair, setTokenPair, availablePairs }) => (
  <div className="token-pair-selector">
    <Form.Group controlId="formTokenPair">
      <Form.Label>Token Pair</Form.Label>
      <Form.Control as="select" value={tokenPair} onChange={e => setTokenPair(e.target.value)} className="custom-select">
        <option value="">Select Token Pair</option>
        {availablePairs.map(pair => (
          <option key={pair} value={pair}>{pair}</option>
        ))}
      </Form.Control>
    </Form.Group>
  </div>
);

export default TokenPairSelector;
