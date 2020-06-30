import React from 'react';

const ShowGamesPlayed = (props) => {
  return(
    <button
      onClick = {(e) => props.handleShowGamesChange(e.target.name)}
      name= {`${props.showGames?"hide":"show"}_games`}
    >
      {`${props.showGames?"Hide":"Show"} the Number of Games Played`}
    </button>
  );
}

export default ShowGamesPlayed;