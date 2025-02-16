import { Link, useParams } from "react-router-dom";
import { gamesArray } from "../../frontend-data";
import { useState } from "react";

//SUBMIT NEW REVIEW FUNCTION
const handleSubmit = (e, setNewReviewArray, reviewsArray) => {
  e.preventDefault();
  const reviewTextArea = document.getElementById("newReview");
  const newReview = reviewTextArea.value;
  reviewTextArea.value = "";

  //ADD NEW REVIEWS TO ARRAY
  setNewReviewArray([...reviewsArray, newReview]);
};

export const MoreDetails = () => {
  const params = useParams();
  const gameId = params.id;
  const game = gamesArray.find((g) => g.id === parseInt(gameId));

  if (!game) {
    return <h2>Game not found!</h2>;
  }

  //REVIEWS FROM GAME DATA
  const [reviewsArray, setNewReviewArray] = useState(game.review || []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <div className="card-header position-relative">
          <Link
            className="btn btn-primary position-absolute top-0 start-0 m-2"
            to="/">
            Back
          </Link>
          <img src={game.image} alt={game.title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h2 className="text-center mb-4">{game.title}</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                <b>
                  <u>Company:</u>
                </b>
                {game.company}
              </p>
              <p>
                <em>({game.published})</em>
              </p>
              <p>
                <b>
                  <u>Type:</u>
                </b>
                {game.game_type}
              </p>
              <p>{game.description}</p>
            </div>
            <div className="col-md-6">
              <p>{game.players_required} players</p>
              <p>{game.time_required} minutes approx</p>
            </div>
          </div>
          {/* REVIEW SECTION */}
          <h3 className="mt-4">Reviews</h3>
          <div>
            {/* DISPLAY REVIEWS */}
            {reviewsArray.length > 0 ? (
              reviewsArray.map((review, index) => <p key={index}>{review}</p>)
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          {/* SUBMIT NEW REVIEW */}
          <form
            onSubmit={(e) => handleSubmit(e, setNewReviewArray, reviewsArray)}>
            <div className="mb-3">
              <textarea
                id="newReview"
                name="newReview"
                rows="4"
                className="form-control"
                placeholder="Enter your review here..."></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
