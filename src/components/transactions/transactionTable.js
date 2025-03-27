import React, { useState } from 'react';
import { calculateRewardPoints } from '../../utils/calculateRewards';

const TransactionTable = ({ transactions }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);
  const currentData = transactions.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div>
      <h3>Transaction Details</h3>
      {transactions.length === 0 ? (
        <p>No transactions found for this filter.</p>
      ) : (
        <>
          <table border="1">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((t, index) => (
                <tr key={`${t.transactionId}-${index}`}>
                  <td>{t.transactionId}</td>
                  <td>${t.amount.toFixed(2)}</td>
                  <td>{t.date}</td>
                  <td>{calculateRewardPoints(t.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '10px' }}>
            Page: {page} / {totalPages}
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
            <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionTable;