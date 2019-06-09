import React, { Component } from "react";
import RecipeDetail from './RecipeDetail';
import './RecipeList.css';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      ingredients: props.ingredients,
      instructions: props.instructions,
      id: props.id,
    }
  }

  renderAddButton() {
    //TODO: change to react boostrap button
    return (
      <a href="/add-recipe">Add New Recipe</a>
    )
  }

  renderRecipeList = () => {
    const recipeNodes = this.props.data.map(recipe => {
      return (
        <div className="recipe-detail">
          <RecipeDetail name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} key={recipe.id}></RecipeDetail>
        </div>
      );
    });

    return recipeNodes;
  }

  render() {
    const recipeNodes = this.renderRecipeList();
    const addButton = this.renderAddButton();
    return (
      <div>
        <div className="add-button"> 
          {addButton}
        </div>
        <div className="recipe-list">
          {recipeNodes}
        </div>
      </div>
    );
  }
}

export default RecipeList;
