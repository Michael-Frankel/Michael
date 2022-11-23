import React from 'react';
import logo from './logo.svg';
import './view/styles/global.scss';
import { BrowserRouter as Router } from "react-router-dom";

//components
import MainRouter from './MainRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <MainRouter />
        </Router>

      </header>
    </div>
  );
}

export default App;
