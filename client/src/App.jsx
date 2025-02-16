//IMPORTS
import { useState } from "react";
import "./App.css";
import { gamesArray } from "./frontend-data";
import { Link } from "react-router-dom";
import { NavigationBar } from "./pages/components/Navigation";

//INDIVIDUAL CARD FORMAT
export const GameDetails = ({ game }) => {
  return (
    <div className="col-md-3">
      {" "}
      <div className="card">
        <img src={game.image} className="card-img-top" alt={game.title} />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">
            <em>({game.published})</em>
          </p>
          <p className="card-text">{game.game_type}</p>
          <p className="card-text">{game.players_required} players</p>
          <p className="card-text">{game.time_required} minutes approx</p>

          <Link className="btn btn-primary" to={`/details/${game.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

//SHOWING ALL GAMES
export default function App() {
  const [gamesList, setGames] = useState(gamesArray);
  return (
    <div class="appBody">
      <>
        <NavigationBar />
    <br></br>
          <h2><span></span>All Games</h2>

        <div className="container my-5">
          <div className="row g-4">
            {" "}
            {gamesList.map((game) => (
              <GameDetails key={game.id} game={game} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
