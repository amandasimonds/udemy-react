import React, { Component } from 'react';
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
// import styled from "styled-components";

class Person extends Component {

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
                <p key="i1" onClick={this.props.click}>
                    My name is {this.props.name} and I am {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>

                <input key="i3" type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
            // <div className="Person" style={style}
        );
    }
};

export default withClass(Person, classes.Person);