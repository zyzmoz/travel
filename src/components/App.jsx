import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Menu from './Menu/Menu';

const App = () => {
  return (    
    <Router>
      <Menu />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
};

export default App;