import React, { Component } from 'react';
import InputValue from './InputValue';
import PropTypes from 'prop-types';

class AddUser extends Component {
  static propTypes = {
    handleAddUser: PropTypes.func.isRequired
  };

  state = {
    firstname: '',
    lastname: '',
    username: ''
  };
  
  updateValue = (field, value) => {
    this.setState({[field]: value});
  };

  checkEmptyFields = () => {
    return(
      this.state.firstname === '' ||
      this.state.lastname === '' ||
      this.state.username === ''
    );
  };

  addUser = (e) => {
    this.props.handleAddUser(
      this.state.username,
      this.state.firstname,
      this.state.lastname
      )
  };

  render(){
    return(
      <div>
        <InputValue label="First Name" name="firstname" changeHandler={this.updateValue} />
        <InputValue label="Last Name" name="lastname" changeHandler={this.updateValue} />
        <InputValue label="Username" name="username" changeHandler={this.updateValue} />
        <button
          name="Add User"
          onClick={(e) => (this.addUser())}
          disabled={this.checkEmptyFields()}
        >
          Add User
        </button>
      </div>
    );
  }
}

export default AddUser;