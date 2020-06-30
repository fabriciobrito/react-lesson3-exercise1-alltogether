import React from 'react';

const ShowGamesPlayed = (props) => {
  return(
    <div>
      <input
        type="checkbox"
        id="show_games"
        name="show_games"
        value="games"
      />
      <label for="show_games">Hide the Number of Games Played</label>
    </div>
  );
}

export default ShowGamesPlayed;