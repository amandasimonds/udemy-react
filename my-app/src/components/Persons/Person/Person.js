import React, { Component } from 'react';
import classes from "./Person.css";
// import styled from "styled-components";

class Person extends Component {

    render(){
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

        <div className={classes.Person}>
            <p onClick={this.props.click}>
                My name is {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>

            <input type="text"
                onChange={this.props.changed}
                value={this.props.name} />

        </div>

        // <div className="Person" style={style}>

        // </div>
    )
    }
};

export default Person;