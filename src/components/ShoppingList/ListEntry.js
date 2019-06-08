import React, { Component }from "react";

class ListEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: props.ingredient,
        }
    }

    render() {
        const { ingredient } = this.state;
        return (
            <li>{ingredient}</li>
        )
    }
}

export default ListEntry;