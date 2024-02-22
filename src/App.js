// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import TradingBot from './components/TradingBot';

function App() {
  return (
    <div className="App">
      <Header/>
      <TradingBot />
    </div>
  );
}

export default App;
