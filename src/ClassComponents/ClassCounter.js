import { Component, Fragment } from "react";

class ClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
// if we will not add the condition then state will update multiple times after adding condition state will update according to condtion
        if(prevState.count !== this.state.count){
            console.log('update', this.state.name)
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <Fragment>
                <input type="text" value={this.state.name} onChange={e => { this.setState({name : e.target.value})}}/>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Count{this.state.count}</button>
            </Fragment>
        )
    }
}

export default ClassCounter;