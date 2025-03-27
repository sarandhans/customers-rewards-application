import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../../api/fetchTransactions';
import CustomerList from '../../components/customerList/customerList';
import Filters from '../../components/filters/filters';
import RewardSummary from '../../components/rewardSummary/rewardSummary';
import TransactionTable from '../../components/transactions/transactionTable';
import Spinner from '../../components/common/Spinner'

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('03');
  const [selectedYear, setSelectedYear] = useState('2025');

  useEffect(() => {
    fetchTransactions()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const customers = [...new Set(transactions.map(t => t.customerId))];
  const customerTransactions = transactions.filter(t => t.customerId === selectedCustomer);
  const filteredTransactions = customerTransactions.filter(t => {
    const date = new Date(t.date);
    return (
      date.getFullYear().toString() === selectedYear &&
      (date.getMonth() + 1).toString().padStart(2, '0') === selectedMonth
    );
  });

  return (
    <div>
      {loading && <Spinner />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          <h2>Customer Rewards Dashboard</h2>
          <CustomerList customers={customers} onSelect={setSelectedCustomer} />
          {selectedCustomer && (
            <>
            <div style={{ marginTop: '2rem' }}>
              <Filters 
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onMonthChange={setSelectedMonth}
                onYearChange={setSelectedYear}
              />
              </div>
              <RewardSummary transactions={customerTransactions} />
              <TransactionTable transactions={filteredTransactions} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;