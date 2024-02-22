import React from 'react';
import { Button } from 'react-bootstrap';
import TradeStatus from './TradeStatus';

const TradeExecutor = ({ status, handleBuyExecution, handleSellExecution }) => (
  <div className="trade-executor">
    <Button variant="success" onClick={handleBuyExecution} style={{ marginRight: '10px' }}> {/* Green for Buy */}
      Buy
    </Button>
    <Button variant="danger" onClick={handleSellExecution}> {/* Red for Sell */}
      Sell
    </Button>
    <TradeStatus status={status} />
  </div>
);

export default TradeExecutor;
