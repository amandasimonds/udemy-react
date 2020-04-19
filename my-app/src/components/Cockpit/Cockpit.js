import React from "react";
import classes from "./Cockpit.css"

const Cockpit = (props) => {

    //here we add assigned classes, based on the if statements. the classes are added as classnames to the elements returned
const assignedClasses = [];
let btnClass = "";

if (props.showPersons) {
    btnClass = classes.Red;
}

if (props.persons.length <= 2) {
  assignedClasses.push(classes.red);
}

if (props.persons.length <= 1) {
  assignedClasses.push(classes.bold);
}

    return(
        <div className = {classes.Cockpit}>
            <h1>Hello!!!</h1>
        <p className={assignedClasses.join(" ")}>Welcome to my app where I practice react</p>
        {/* <StyledButton */}
        <button className={btnClass}
            // alt={this.state.showPersons}
            onClick={props.clicked}>Show People 
          </button>
        {/* </StyledButton> */}
        </div>
    );
}

export default Cockpit;