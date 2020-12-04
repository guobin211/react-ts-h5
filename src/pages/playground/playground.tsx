import React from 'react';
import logo from 'assets/logo.svg';
import './playground.css';
import MtButtonComponent from 'class-components/mt-button/mt-button.component';

function Playground() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MtButtonComponent />
        <p>
          Edit <code>src/Playground.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Playground;
