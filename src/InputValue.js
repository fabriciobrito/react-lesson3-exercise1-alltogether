import React from 'react';
import PropTypes from 'prop-types';

const InputValue = (props) => {  
  const {label, name, changeHandler} = props;
  return(
    <p>
      <input
        type="text"
        placeholder={label}
        name={name}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}>
      </input>
    </p>
  );
}

InputValue.Proptypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default InputValue;