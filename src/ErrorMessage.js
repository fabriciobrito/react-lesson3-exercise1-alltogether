import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  return(
    <div>
      {props.username !== '' && (
        `${props.username} already exists in the database.`
      )}
    </div>
  );
}

ErrorMessage.Proptypes = {
  username: PropTypes.string.isRequired
}

export default ErrorMessage;