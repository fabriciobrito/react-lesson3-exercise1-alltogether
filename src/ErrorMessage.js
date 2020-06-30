import React from 'react'

const ErrorMessage = (props) => {
  return(
    <div>
      {props.username !== '' && (
        `${props.username} already exists in the database.`
      )}
    </div>
  );
}

export default ErrorMessage;