import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {gamesArray} from "../frontend-data.jsx";

//set  up nav bar
//set  up game so it can be called in GameDetails
//need to add link to game.id on the button
//sort image url 
//add styling



const GameDetails = () => {
  return (
    <div>
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
      <h1>Board Games Tracker</h1>
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
     
     

      <div>
        <div>
          <h2>Board Games</h2>
        </div>
        <div>
          {gamesList.map(game => (
            // <GameDetails/>
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
