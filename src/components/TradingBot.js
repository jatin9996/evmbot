import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TokenPairSelector from './TokenPairSelector';
import ValueRangeInput from './ValueRangeInput';
import TransactionCountInput from './TransactionCountInput';
import TradeExecutor from './TradeExecutor';

const TradingBot = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [numTransactions, setNumTransactions] = useState('');


const [tokenPair, setTokenPair] = useState('');
const availablePairs = ['TOKEN_A/TOKEN_B', 'TOKEN_C/TOKEN_D']; // Add more pairs as needed

return (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs={12} lg={6}>
        <TokenPairSelector tokenPair={tokenPair} setTokenPair={setTokenPair} availablePairs={availablePairs} />
        <ValueRangeInput label="Min Value" value={minValue} setValue={setMinValue} placeholder="Enter min value" />
        <ValueRangeInput label="Max Value" value={maxValue} setValue={setMaxValue} placeholder="Enter max value" />
        <TransactionCountInput numTransactions={numTransactions} setNumTransactions={setNumTransactions} />
        <TradeExecutor minValue={minValue} maxValue={maxValue} numTransactions={numTransactions} tokenPair={tokenPair} />
      </Col>
    </Row>
  </Container>
);
};

export default TradingBot;
