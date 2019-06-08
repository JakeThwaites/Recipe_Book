import React, { Component } from "react";
import IngredientList from './IngredientList.js';
import { Link } from 'react-router-dom';


class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      ingredients: props.ingredients,
      instructions: props.instructions,
    }
  }

  render() {
    const { name, ingredients, instructions } = this.state;
    return (
      <div className="recipe">
        <h4>{name}</h4>
        <IngredientList ingredients={ingredients} />
        <Link to={{ pathname: '/shopping-list', state: { ingredients } }}>Create Shopping List</Link>
        <ol>{instructions}</ol>
      </div>
    )
  }
}

export default RecipeDetail;
