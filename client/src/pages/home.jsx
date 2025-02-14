import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {gamesArray} from "../frontend-data.jsx";

//need to add link to game.id on the button



const GameDetails = () => {
  return (
    <div>
      <p> check </p>
      {/* <h2>{game.title}</h2>
      <img src={game.image} />
      <p>{game.published}</p>
      <p>{game.company}</p>
      <p>{game.game_type}</p>
      <p>{game.players_required} players</p>
      <p>{game.time_required} minutes approx</p>
      <p>{game.description}</p> */}
    </div >
  );
};
// );
//};

const Home = () => {
//State
  const [gamesList, setGames] = useState(gamesArray);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
      <p>This is home</p>

      <div>
        <div>
          <h1>Board Games</h1>
        </div>
        <div>
          {gamesList.map(game => (
            <div>
              <img src={game.image} />
              <h4>{game.title}</h4>
              <p>{game.published}</p>
              <p>{game.game_type}</p>
              <p>{game.players_required} players</p>
              <p>{game.time_required} minutes approx</p>
              <button>View Details</button>
            </div>
          ))};
        </div>
      </div>

      <GameDetails />

      <Outlet />
    </>
  );
};

export default Home;
