//IMPORTS
import { Link } from "react-router-dom";

//NAVIGATION BAR
export const NavigationBar = () => {
  return (
    <div class="navBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h1> Board Games Tracker</h1>
          </Link>
          <div className="d-flex">
            <Link to="/" className="btn btn-primary mx-2">
              Home
            </Link>
            <Link to="/search" className="btn btn-primary mx-2">
              Search
            </Link>
            <Link to="/signin" className="btn btn-primary mx-2">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
