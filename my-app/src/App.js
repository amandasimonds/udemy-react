import React, { Component } from 'react';
import classes from './App.css';
// import styled from "styled-components";
import Person from './Person/Person';
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   borderRadius: "10px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            {/*makes a new array of JSX elements*/}
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}

        {/* <Person 
          name={this.state.persons[0].name} 
          age = "28"/>
        <Person 
          name={this.state.persons[1].name} 
          age="32"
          //bind syntax is better-------v
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age="27" /> */}
      </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightred",
      //   color: "black"
      // }

      // takes red classes and pushes them to an array // (then you need the join method with a space to add classes to elements)
      // btnClass.push(classes.Red);
      
      // if state showPersons = true, add the red btn class!
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
