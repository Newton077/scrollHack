import React from 'react';
import Tablero from './tablero';
import WalletConnect from './wallet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">GameFarming</p>
        <WalletConnect />
        <Tablero />
      </header>
    </div>
  );
}

export default App;
