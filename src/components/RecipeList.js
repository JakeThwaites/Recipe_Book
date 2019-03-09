import React, { Component } from "react";
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {

  render() {
    const recipeNodes = this.props.data.map(recipe => {
      return (
        <RecipeDetail name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} key={recipe.id}></RecipeDetail>
      );
    });

    return (
      <div className="recipe-list">
        {recipeNodes}
      </div>
    );
  }
}

export default RecipeList;
