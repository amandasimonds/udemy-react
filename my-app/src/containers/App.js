import React, { Component } from 'react';
import classes from './App.css';
// import styled from "styled-components";
import Person from '../components/Persons/Person/Person';
import Persons from "../components/Persons/Persons"
// import Radium, { StyleRoot } from "radium"

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? "red" : "green"};
//       color: white;
//       font: inherit;
//       border: 7px solid yellow;
//       padding: 8px;
//       border-radius: 10px;
//       cursor: pointer;

//       &:hover {
//         background-color: ${props => props.alt ? "salmon" : "lightgreen"};
//         color: black
//       }
// `;

class App extends Component {
  state = {
    persons: [
      {id: "fdsafd", name: "Max", age: 28},
      {id: "ewrer", name: "Ben", age: 32},
      {id: "dsar34w", name: "Amanda", age: 27}
    ],
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
// {/**create a copy using spread operator instead of changing the original state */}
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
  this.setState ({persons: persons})
}

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // replicate the state array
    const person = {
      ...this.state.persons[personIndex]
    };

    // adjust the name
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler= () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
    //if showPersons is true, set doesShow to false. if doesShow is true, set showPersons to false
  }

  render() {

    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons= {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
          </div>
          );

      btnClass = [classes.Red]
    }

//here we add assigned classes, based on the if statements. the classes are added as classnames to the elements returned
const assignedClasses = [];
if (this.state.persons.length <= 2) {
  assignedClasses.push(classes.red);
}

if (this.state.persons.length <= 1) {
  assignedClasses.push(classes.bold);
}

    return (
   
      <div className={classes.App}>
        <h1>Hello!!!</h1>
        <p className={assignedClasses.join(" ")}>Welcome to my app where I practice react</p>
        {/* <StyledButton */}
        <button className={btnClass}
            // alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Show People 
          </button>
        {/* </StyledButton> */}
        {persons}
      </div>
 
    );
  }
}

export default App;
