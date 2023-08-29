import React, { Component } from 'react';

class RegularComponent extends Component {
    render() {
        console.log(" RegularComponent ");
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent;