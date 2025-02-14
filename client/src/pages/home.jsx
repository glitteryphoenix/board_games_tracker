import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {gamesArray} from "../frontend-data.jsx";
import { NavigationBar } from "./components/Navigation.jsx";

//need to add link to game.id on the button

//sort image url 
//add styling



const GameDetails = ({game}) => {
  return (

    <div>
      <h2>{game.title}</h2>
      {/* <img src={game.image} /> */}
      <p>{game.published}</p>
      <p>{game.company}</p>
      <p>{game.game_type}</p>
      <p>{game.players_required} players</p>
      <p>{game.time_required} minutes approx</p>
      <p>{game.description}</p>
      <button> Reviews </button>
    </div >
  );
 
};


const Home = () => {

//State
  const [gamesList, setGames] = useState(gamesArray);

  return (
    
    <>
    <NavigationBar/>
     
     

      <div>
        <div>
          <h2>Board Games</h2>
        </div>
        <div>
          {gamesList.map(game => ( 
            <GameDetails key={game.id} game={game}/>
          ))};
        </div>
      </div>

  
      <Outlet />
    </>
  );
};

export default Home;
