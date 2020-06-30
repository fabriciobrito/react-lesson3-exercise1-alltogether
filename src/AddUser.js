import React, { Component } from 'react';

class AddUser extends Component {
  render(){
    return(
      <div>
        <p>
          First Name:
          <input
            type="text">
          </input>
        </p>
        <p>
          Last Name:
          <input
            type="text">
          </input>
        </p>
        <p>
          Username:
          <input
            type="text">
          </input>
        </p>
        <p>
          <button name="Add User">Add User</button>
        </p>
      </div>
    );
  }
}

export default AddUser;