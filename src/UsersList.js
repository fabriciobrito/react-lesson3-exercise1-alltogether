import React, { Component } from 'react';
import User from './User.js';
import PropTypes from 'prop-types';

class UsersList extends Component {
  static propTypes ={
    users: PropTypes.array.isRequired
  };

  render(){
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