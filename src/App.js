import logo from './logo.svg';
import './App.css';
import Parallax from './components/parallax'
import { computeHeadingLevel } from '@testing-library/react';
import { Component } from 'react';
import PortfolioParallax from './components/parallax';

function App() {
  return (
    <div className="App">
      <PortfolioParallax></PortfolioParallax>
    </div>
  );
}

export default App;
