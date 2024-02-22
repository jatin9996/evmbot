import React from 'react';
import { Form } from 'react-bootstrap';

const ValueRangeInput = ({ label, value, setValue, placeholder }) => (
  <div className="value-range-input">
    <Form.Group controlId={`form${label.replace(/\s+/g, '')}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="number" value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder} />
    </Form.Group>
  </div>
);

export default ValueRangeInput;
