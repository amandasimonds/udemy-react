import React, { Component } from 'react';
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context"

// import styled from "styled-components";

class Person extends Component {
constructor(props) {
    super(props);
    this.inputElementRef = React.createRef()
}

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[Person.js] rendering...")
        // const style = {
        //     "@media (min-width: 500px)": {
        //         width: "450px"
        //     }
        // };

        // const rnd = Math.random();
        // if (rnd > 0.7) {
        //     throw new Error("Something went wrong")
        // }

        return (
            <Aux>
                <AuthContext.Consumer>
                    {/* return JSX in the function using context */}
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}     
                </AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>
                    My name is {this.props.name} and I am {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>

                <input 
                    key="i3" 
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
            // <div className="Person" style={style}
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);