import React from 'react';
import { Alert } from 'react-bootstrap';

const TradeStatus = ({ status }) => (
  status ? <Alert variant="info">{status}</Alert> : null
);

export default TradeStatus;