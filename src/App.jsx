import React from 'preact/compat';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesContent from './Components/RoutesContent';
import Header from './Components/Header';

const App = (props) => {
  return (
    <Router>
      <Header />
      <RoutesContent />
    </Router>
  );
}


export default App;