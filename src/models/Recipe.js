import React, { Component } from "react";

class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

class RecipeList extends Component {
  render() {
    const recipeNodes = this.props.data.map(recipe => {
      return (
        <Recipe author={recipe.author}>{recipe.text}</Recipe>
      );
    });

    return (
      <div className="recipe-list">
        {recipeNodes} // MODIFIED
      </div>
    )
  }
}

export default Recipe;
