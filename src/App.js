import React, { Component } from 'react';
import logo from './logo.svg';
import AddUser from './AddUser.js';
import UsersList from './UsersList.js';
import ShowGamesPlayed from './ShowGamesPlayed.js';
import ErrorMessage from './ErrorMessage.js';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showGames: true,
      duplicateUsername: '',
      users: [
        {username:'user1',
         firstname: 'user',
         lastname: '1',
         gamesPlayed: 0
        },
        {username:'user2',
         firstname: 'user',
         lastname: '2',
         gamesPlayed: 0
        },
        ]
    }
  };
  
  handleShowGamesChange = (value) => {
    this.setState({showGames: value === 'show_games'});
  };

  handleAddUser = (username, firstname, lastname) => {
    if(this.checkUniqueUsername(username)){
      this.setState((prevState) => ({
        duplicateUsername: '',
        users: [...prevState.users, 
            {username: username,
             firstname: firstname,
             lastname: lastname,
             gamesPlayed: 0
            }],
      }));
    }else{
      this.setState({duplicateUsername: username});
    }
  };

  checkUniqueUsername = (username) => {
    return this.state.users.every((u) => (u.username !== username));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser handleAddUser={this.handleAddUser} />
        <ErrorMessage username={this.state.duplicateUsername} />
        <ShowGamesPlayed showGames={this.state.showGames} handleShowGamesChange={this.handleShowGamesChange} />
        <UsersList showGames={this.state.showGames} users={this.state.users} />
      </div>
    );
  };
}

export default App;
