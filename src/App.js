import React from 'react';
import logo from './logo.svg';
import BarChart from './components/barChart.js';
import WorldMap from './components/worldMap.js';
import './App.css';


function App() {

  return (
    <div className="App">
      <WorldMap width={960} height={500}/>
    </div>
  );
}

export default App;
