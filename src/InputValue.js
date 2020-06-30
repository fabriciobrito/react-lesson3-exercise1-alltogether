import React from 'react'

const InputValue = (props) => {
  const {label, name, changeHandler} = props;
  return(
    <p>
      {`${label}:`}
      <input
        type="text"
        name={name}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}>
      </input>
    </p>
  );
}

export default InputValue;