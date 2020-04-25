import React, { Component } from "react"
import Person from "./Person/Person"

class Persons extends Component {
  //we don't have an initial state,s o we don't need this for now.
  // static getDerivedStateFromProps(props, state){
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // } 

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldCOmponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return { message: "Snapshot!"}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot)
  }

  render() {
  console.log("[Persons.js] rendering...")

        return this.props.persons.map((person, index) => {
        // {/*makes a new array of JSX elements*/}
        return (<Person 
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age} 
        key={person.id} 
        changed={(event) => this.props.changed(event, person.id)}/>
        )
      });
    }
  }

export default Persons