import React from 'react';
import PropTypes from 'prop-types';

const ShowGamesPlayed = (props) => {
  return(
    <button
      className="smallButton"
      onClick = {(e) => props.handleShowGamesChange(e.target.name)}
      name= {`${props.showGames?"hide":"show"}_games`}
    >
      {`${props.showGames?"Hide":"Show"} the Number of Games Played`}
    </button>
  );
}

ShowGamesPlayed.propTypes = {
  showGames: PropTypes.bool.isRequired
};

export default ShowGamesPlayed;