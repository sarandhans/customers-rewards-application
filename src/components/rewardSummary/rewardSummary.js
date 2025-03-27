import React from 'react';
import { calculateRewardPoints } from '../../utils/calculateRewards';

const RewardSummary = ({ transactions }) => {
  const summary = {};

  transactions.forEach(t => {
    const date = new Date(t.date);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const key = `${month} ${year}`;
    if (!summary[key]) {
      summary[key] = { total: 0, amount: 0 };
    }
    summary[key].total += calculateRewardPoints(t.amount);
    summary[key].amount += t.amount;
  });

  return (
    <div>
      <h3>Monthly Reward Summary</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Points</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(summary).map(([month, data]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{data.total}</td>
              <td>${data.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardSummary;