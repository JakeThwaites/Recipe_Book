import React, { Component }from "react";
import './ListEntry.css';

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
            <li onClick={this.props.onClick}>{ingredient}</li>
        )
    }
}

export default ListEntry;