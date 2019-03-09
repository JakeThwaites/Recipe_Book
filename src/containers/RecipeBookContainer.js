import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import RecipeList from '../components/RecipeList';
import NavBar from '../models/NavBar';

class RecipeBookContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
   }

  render() {
        return (
           <Router>
              <Fragment>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <RecipeList />
              </Fragment>
           </Router>
        )
     }
}

export default RecipeBookContainer;
