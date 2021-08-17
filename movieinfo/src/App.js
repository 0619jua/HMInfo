import React from 'react';
import MovieInfo from './MovieInfo/MovieInfo';


import {
  BrowserRouter as Router,

} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MovieInfo />
      <Router>

      </Router>
    </div>
  );
}

export default App;
