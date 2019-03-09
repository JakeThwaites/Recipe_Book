import React, { Component } from "react";

class RecipeDetail extends Component {
  render(recipe) {
    const ingredientsList = this.props.ingredients.map((ingredient) => {
      return <li>{ingredient}</li>
    })

    const instructions = this.props.instructions.map((instruction) => {
      return <li>{instruction}</li>
    })

    return (
      <div className="recipe">
        <h4>{this.props.name}</h4>
        <ul>{ingredientsList}</ul>
        <ol>{instructions}</ol>
      </div>
    );
  }
}

export default RecipeDetail;
