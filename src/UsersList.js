import React, { Component } from 'react';
import User from './User.js';

class UsersList extends Component {
  render(){
    console.log(this.props.users);
    return(
      <div>
        <h2>Users List</h2>
        <ul>
        {this.props.users.map((user) => (
          <User key={user.username} user={user} showGames={this.props.showGames} />
        ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;