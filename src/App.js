import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

        this.handleToggle = this.handleToggle.bind(this);
    }
    render() {
        return (
            <Fragment>
                <CSSTransition in={this.state.show} timeout={300} classNames="fade">
                    <div> hello world </div>
                </CSSTransition>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment >
        )
    }
    handleToggle() {
        this.setState((prevState) => ({ show: !prevState.show }), () => console.log("show status:", this.state.show))
    }
}


export default App