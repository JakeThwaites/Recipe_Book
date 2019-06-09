import React, { Component } from "react";

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    render() {
        return (
            <h1>Add recipe</h1>
        )
    }
}

export default AddRecipe;