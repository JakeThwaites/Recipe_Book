import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeBookContainer from './containers/RecipeBookContainer.js'
import RecipeBox from './containers/RecipeBox';

class App extends Component {
  render() {
    return (
      <RecipeBox />
    );
  }
}

export default App;
