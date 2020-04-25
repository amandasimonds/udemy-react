import React, {useEffect} from "react";
import classes from "./Cockpit.css"

const Cockpit = (props) => {

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    //can send http request
    setTimeout(() => {
      alert("saved data");
    }, 1000)
    //add second argument to tell react when to use effect
  }, [props.persons])

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
            <h1>{props.title}</h1>
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