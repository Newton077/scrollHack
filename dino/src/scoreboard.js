// Scoreboard.js
import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '10px', fontSize: '20px' }}>
      Puntuación Actual: {score}
    </div>
  );
};

export default Scoreboard;
