import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import RecipeBox from './containers/RecipeBox';

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;
