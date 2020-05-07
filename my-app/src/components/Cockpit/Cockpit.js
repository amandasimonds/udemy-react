import React, { useEffect } from "react";
import classes from "./Cockpit.css"

const Cockpit = (props) => {

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    //can send http request
    const timer = setTimeout(() => {
      alert("saved data");
    }, 1000);
    //this runs BEFORE the main useEffect, but AFTER the first render cycle
    return () => {
      clearTimeout(timer)
      console.log("[Cockpit.js] cleanup work in useEffect")
    }
    //add second argument to tell react when to use effect
    //if you pass an empty array, it runs on no dependencies, only will run the first time which is the default
  }, [])

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect")
  return () => {
    console.log("[Cockpit.js] cleanup work in 2nd useEffect")
    }
  })

  //here we add assigned classes, based on the if statements. the classes are added as classnames to the elements returned
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
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