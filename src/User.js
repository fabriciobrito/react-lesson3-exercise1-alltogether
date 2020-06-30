import React from 'react';

const User = (props) => {
  return(
    <li>{props.user.username} played {props.user.gamesPlayed} games.</li>
  );
}

export default User;