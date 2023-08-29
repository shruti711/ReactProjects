import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    // create a method to increment the value of count

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.increamentCount}> Class Count{this.state.count} </button>
            </div>
        )
    }
}

export default ClassCounter;