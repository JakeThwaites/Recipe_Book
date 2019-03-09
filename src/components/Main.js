import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import RecipeBox from '../containers/RecipeBox';

class Main extends Component {
  constructor() {
    super();
    this.state = { page: null };
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route path="/recipes" component={RecipeBox} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
