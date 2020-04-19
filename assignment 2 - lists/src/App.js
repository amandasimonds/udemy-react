import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from "./Char/Char"

class App extends Component {
  state = {
      userInput: '',
  }

  textChangeHandler = (event) => {

    // const textp = {
    //   ...this.state.text.p
    // }

    // textp.p = event.target.value;

    // const text = [...this.state.text]

    this.setState({userInput: event.target.value})
  }

  // characterHandler = () => {

  //   I was close!!!!

  //   const userInput = this.state.userInput

  //   const characters = userInput.split("")

  //   console.log(characters)

  //   this.setState({characters: characters})
  // }

  deleteCharHandler = (index) => {

    const text = this.state.userInput.split("")
    text.splice(index, 1)
    const updatedText = text.join("");

    this.setState({userInput: updatedText})

  }

  render() {

    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char 
      character={ch} 
      key={index} 
      click={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">

        <UserInput
        changed={this.textChangeHandler}
        value={this.state.userInput}
        />

        <Validation
        inputLength={this.state.userInput.length}/>

        {charList}

      </div>
    );
  }
}

export default App;
