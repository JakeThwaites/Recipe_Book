import React, { Component } from "react";

class RecipeDetail extends Component {
  render(recipe) {
    return (
      <div className="recipe">
        <h1>Name: {recipe.name}</h1>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
      </div>
    );
  }
}

export default RecipeDetail;
