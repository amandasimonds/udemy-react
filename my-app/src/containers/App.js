import React, { Component } from 'react';

import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// import styled from "styled-components";
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

    if(this.state.showPersons) {
      persons =
          <Persons 
            persons= {this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
   
      <div className={classes.App}>
        <Cockpit 
        clicked={this.togglePersonsHandler}
        showPersons={this.state.showPersons}
        persons={this.state.persons} />
        {persons}
      </div>
 
    );
  }
}

export default App;
