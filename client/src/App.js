import React from 'react';
import BasicSearch from './BasicSearch';
import ComplexSearch from './ComplexSearch';
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Cars App</h1>
      </div>
      <div className='App-Body'>
        <div className='basic-search-container'>
          <h3>Basic Search</h3>
          <BasicSearch />
        </div>
        <div className='complex-search-container'>
          <h3>Complex Search</h3>
          <ComplexSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
