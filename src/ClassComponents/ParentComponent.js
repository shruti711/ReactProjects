import React, { Component } from 'react';
import Purecomponents from './PureComponent';
import RegularComponent from './RegularComponent';
import MemoComponent from '../FunctionalComponent/ParentComponents';
import RegComponent from '../FunctionalComponent/RegComponent';
import State from '../ClassComponents/State';
import ClassCounter from './ClassCounter';

// If I change ParentComponent with Purecomponents than component will not rerender because ParentComponent 
// will check there is same value of string 'Shruti' that's why it will not rerender.

class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Shruti'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                // name: 'Shree' -> If the value of string will change than it will render in purecomponent
                name: 'Shruti'
            })
        }, 2000)
    }

    render() {
        // console.log(" **** ParentComponent ****")
        return (
            <div>
                {/* 1. Every 2 second Purecomponent will not render but Regular component will render according to setState */}
                {/* 2. Regular Component does not implement the shouldComponentUpdate method. It always return true by default.
                But Purecomponent implement shouldComponentUpdate with shallow props and state comparision. */}
                {/* 3. Shallow Comparision(SC)  [More details in practice-main ShallowComparision.js file]
                    a) Primitive type: a (SC) b return true if the value of a and b are same.
                    b) Complex type: a (SC) b return true if a and b refrence to the same object */}

                <Purecomponents name = {this.state.name}> </Purecomponents>
                <RegularComponent name={this.state.name}> </RegularComponent>

                {/* PureComponent with memo */}
                <MemoComponent name={this.state.name}></MemoComponent>
                <RegComponent name={this.state.name}></RegComponent>


                <State />

                ################## Class Component with LifeCycle ##################
                <ClassCounter />

            </div>
        )
    }
}

export default ParentComponent;