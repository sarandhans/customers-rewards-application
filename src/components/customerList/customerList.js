import React from 'react';
import PropTypes from 'prop-types';

const CustomerList = ({ customers, onSelect }) => (
  <div>
    <label>Select Customer: </label>
    <select onChange={e => onSelect(e.target.value)}>
      <option value="">-- Select --</option>
      {customers.map(customer => (
        <option key={customer} value={customer}>{customer}</option>
      ))}
    </select>
  </div>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;