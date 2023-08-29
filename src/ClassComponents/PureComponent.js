import React, { PureComponent } from "react";

// A PureComponent implements shouldComponentUpdate with shallow Props and state comparision.
// PureComponent use to preventing unnecessry rendering

class Purecomponents extends PureComponent {
    render() {
        console.log(" ### PureComponent ###")
        return (
            <div className="App">
                Pure Component { this.props.name }
            </div>
        )
    }
}

export default Purecomponents;