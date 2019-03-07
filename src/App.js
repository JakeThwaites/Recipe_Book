import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeBookContainer from './containers/RecipeBookContainer.js'

class App extends Component {
  render() {
    return (
      <RecipeBookContainer />
    );
  }
}

export default App;
