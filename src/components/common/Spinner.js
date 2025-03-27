import React from 'react';

const Spinner = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #ccc',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto'
    }} />
    <p>Loading...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Spinner;
