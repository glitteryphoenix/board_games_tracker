//IMPORTS
import { Link, useParams } from "react-router-dom";
import { gamesArray } from "../../frontend-data";

//MORE DETAILS PAGE
export const MoreDetails = () => {
  const params = useParams();
  const gameId = params.id;
  const game = gamesArray.find((g) => g.id === parseInt(gameId));

  if (!game) {
    return <h2>Game not found!</h2>;
  }

  return (
    <>
      <img src={game.image} alt={game.title} />
      <div>
        <Link className="btn btn-primary" to="/">
          Back
        </Link>
        <h5>{game.title}</h5>
        <p>
          {" "}
          <b>
            <u>Company:</u>
          </b>
          {game.company}
        </p>
        <p>
          <em>({game.published})</em>
        </p>
        <p>
          {" "}
          <b>
            <u>Type:</u>
          </b>
          {game.game_type}
        </p>
        <p>{game.description}</p>
        <p>{game.players_required} players</p>
        <p>{game.time_required} minutes approx</p>
        <h3>Reviews</h3>
        <p>{game.review}</p>
      </div>
    </>
  );
};

export default MoreDetails;
