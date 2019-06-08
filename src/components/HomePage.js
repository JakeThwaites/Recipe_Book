import React, {Component} from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }

    render() {
        const { name } = this.state;
        return (
            <div className="homepage">
                <h1>Recipe Book!</h1>
                <h4>Hello {name}</h4>
            </div>
        );
    }
}

export default HomePage;
