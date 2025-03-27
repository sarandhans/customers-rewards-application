import React from 'react';

const Filters = ({ selectedMonth, selectedYear, onMonthChange, onYearChange }) => {
  const months = ['01', '02', '03'];
  const years = ['2025', '2024'];
  
  return (
    <div>
      <label>Month: </label>
      <select value={selectedMonth} onChange={e => onMonthChange(e.target.value)}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <label style={{ marginLeft: '10px' }}>Year: </label>
      <select value={selectedYear} onChange={e => onYearChange(e.target.value)}>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;