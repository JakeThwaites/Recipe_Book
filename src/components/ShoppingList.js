import React, { Component } from "react";

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: props.location.state.ingredients,
        }
    }

    renderShoppingList = () => {
        const { ingredients } = this.state;
        const list = ingredients.map((i) => {
            return <li>{i}</li>;
        });

        return list;
    }

    render() {
        const ingredientsList = this.renderShoppingList();
        return (
            <>
                <h1>Shopping List</h1>
                <ul>{ingredientsList}</ul>
            </>
        );
    }
}

export default ShoppingList;