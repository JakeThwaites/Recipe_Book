import React, { Component } from "react";
import IngredientList from './IngredientList.js';

// class RecipeDetail extends Component {
//   render(recipe) {
//     const ingredientsList = this.props.ingredients.map((ingredient) => {
//       return <li>{ingredient}</li>
//     })
//
//     const instructions = this.props.instructions.map((instruction) => {
//       return <li>{instruction}</li>
//     })
//
//     return (
//       <div className="recipe">
//         <h4>{this.props.name}</h4>
//         <IngredientList ingredients={this.props.ingredients} />
//         <ol>{instructions}</ol>
//       </div>
//     );
//   }
// }

function RecipeDetail(props){
  return (
    <div className="recipe">
    <h4>{props.name}</h4>
    <IngredientList ingredients={props.ingredients} />
    <ol>{props.instructions}</ol>
    </div>
  )
}

export default RecipeDetail;
