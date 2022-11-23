import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import MainLayoutRouter from './MainLayoutRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Router>
          <MainLayoutRouter />
        </Router>







      </header>
    </div>
  );
}

export default App;
