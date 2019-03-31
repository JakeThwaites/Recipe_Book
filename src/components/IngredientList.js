import React, {Component} from 'react';

function IngredientList(props) {
  const ingredientsList = props.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>
  })
  return (
    <ul>{ingredientsList}</ul>
  );
}

export default IngredientList;
