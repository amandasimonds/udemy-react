import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username: "discocookie"},
      {username: "pandafox"},
      {username: "mandalamanda"},
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [
        {username: "discocookie"},
        {username: event.target.value},
        {username: event.target.value},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid gray",
      padding: "8px",
      borderRadius: "10px",
      margin: "10px"
    };

    return (
      <div className="App">
        
        <UserInput
        changed={this.usernameChangedHandler}
        />

        <UserOutput 
        username={this.state.usernames[0].username}/>
        <UserOutput 
          username={this.state.usernames[1].username}
          changed={this.usernameChangedHandler}
          />
        <UserOutput 
        username={this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;
