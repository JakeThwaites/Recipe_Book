import React, { Component } from "react";
import ListEntry from './ListEntry';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
        }
    }

    componentDidMount = () => {
        this.getIngredients();
    }

    getIngredients = () => {
        const ingredientsData = this.props.location.state.ingredients;
        const ingredients = ingredientsData.map((i) => {
            return { name: i, inBasket: false };
        })
        this.setState({ ingredients });        
    }

    handleIngredientClick = (ingredient) => {
        // console.log(ingredient);
    }

    renderShoppingList = () => {
        const { ingredients } = this.state;
        const list = ingredients.map((i) => {
            return <ListEntry ingredient={i} onClick={this.handleIngredientClick}/>
        });

        return list;
    }

    render() {
        console.log(this.state);
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