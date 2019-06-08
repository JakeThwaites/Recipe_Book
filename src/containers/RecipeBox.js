import React, { Component } from "react";
import RecipeList from '../components/Recipe/RecipeList';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1,
          name: "Jam Sandwich",
          instructions: ["Put jam on a slice of bread", "put another slice of bread on top"],
          ingredients: ["jam", "bread"]
        },
        { id: 2,
          name: "Jam Sandwich",
          instructions: ["Put jam on a slice of bread", "put another slice of bread on top"],
          ingredients: ["jam", "bread"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="recipe-box">
        <RecipeList data={this.state.data}/>
      </div>
    );
  }
}

export default RecipeBox;
