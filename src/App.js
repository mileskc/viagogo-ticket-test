import React from 'react';
import Header from './components/Header'
import Events from './components/Events'
import FilterEvents from './components/FilterEvents';
import SearchEvents from './components/SearchEvents';

function App() {
  return (
    <div className="App">
      <Header/>

      {/* Part 3 */}
      <SearchEvents/>

      {/* Part 2 */}
      {/* <FilterEvents/> */}

      {/* Part 1 */}
      {/* <Events/> */}
    </div>
  );
}

export default App;
