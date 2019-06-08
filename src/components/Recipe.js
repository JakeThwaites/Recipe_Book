import React, { Component } from "react";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            ingredients: props.ingredients,
        }
    }

    render() {
        const { name } = this.state;
        return <h1>{name}</h1>;
    }
}

export default Recipe;