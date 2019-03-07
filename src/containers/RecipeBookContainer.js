import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

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
                <Route exact path="/" component={HomePage} />
              </Fragment>
           </Router>
        )
     }
}

export default RecipeBookContainer;
