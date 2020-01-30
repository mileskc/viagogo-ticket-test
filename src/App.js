import React from 'react';
import './App.css';
import Header from './components/Header'
import Events from './components/Events'
import FilterEvents from './components/FilterEvents';
import SearchEvents from './components/SearchEvents';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchEvents/>
      {/* <FilterEvents/> */}
      {/* <Events/> */}
    </div>
  );
}

export default App;
