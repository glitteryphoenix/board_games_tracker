// TODO: show reviews / details by grabbing game id
// TODO: find video by tutor on react router

import { useState } from "react";
import "./App.css";
import { gamesArray } from "./frontend-data";

const GameDetails = ({ game }) => {
  return (
    <div>
      <h2>{game.title}</h2>
      {/* <img src={game.image} /> */}
      <p>({game.published})</p>
      <p>{game.company}</p>
      <p>{game.game_type}</p>
      <p>{game.players_required} players</p>
      <p>{game.time_required} minutes approx</p>
      {/* <p>{game.description}</p> */}
      <button> Details </button>
    </div>
  );
};

export default function App() {
  const [gamesList, setGames] = useState(gamesArray);

  return (
    <>
      {/* <NavigationBar /> */}
      {gamesList.map((game) => (
        <GameDetails key={game.id} game={game} />
      ))}
      ;
    </>
  );
}
