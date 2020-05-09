import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css"
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    //can send http request
    // const timer = setTimeout(() => {
    //   alert("saved data");
    // }, 1000);
    toggleBtnRef.current.click()
    //this runs BEFORE the main useEffect, but AFTER the first render cycle
    return () => {
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

      <button 
        ref={toggleBtnRef} 
        className={btnClass}
        // alt={this.state.showPersons}
        onClick={props.clicked}>Show People
      </button>
      <AuthContext.Consumer>
        {/* return JSX in the function using context */}
        {(context) =>
        <button onClick={context.login}>Log in
        </button>}
      </AuthContext.Consumer>

    </div>
    );
}

export default Cockpit;