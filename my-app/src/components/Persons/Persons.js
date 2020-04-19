import React from "react"
import Person from "./Person/Person "

const Persons = (props) => props.persons.map((person, index) => {
        // {/*makes a new array of JSX elements*/}
        return <Person 
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age} 
        key={person.id} 
        changed={(event) => props.changed(event, person.id)}/>
      });

export default Persons