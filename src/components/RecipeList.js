import React, { Component } from "react";
import RecipeDetail from './RecipeDetail';
import recipeData from '../models/RecipeData';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {data: recipeData};
  }
  render() {
    const recipesList = this.props.data.map(recipe, index){
      return (
          <div key={index} className="recipe">
            <RecipeDetail
               name={recipe.name}
               ingredients={recipe.ingredients}
               instructions={recipe.instructions}
            >
            </RecipeDetail>
         </div>
      );
    }
    return (
      <div className="recipe-list">
        This is the recipe list.
        {recipesList}
      </div>
    );
  }
}

export default RecipeList;
