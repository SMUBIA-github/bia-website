import React from 'react';

const Datathon = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://hackathon-two-rho.vercel.app/"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          overflow: 'auto', // Ensure the iframe is scrollable
        }}
        title="Datathon Project"
      />
    </div>
  );
};

export default Datathon;
