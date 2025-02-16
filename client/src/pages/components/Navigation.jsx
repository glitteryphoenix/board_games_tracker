//IMPORTS
import { Link } from "react-router-dom";

//NAVIGATION BAR
export const NavigationBar = () => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h1 className="navbar-title">Board Games Tracker</h1> {/* Apply custom class */}
          </Link>
          <div className="d-flex">
            <Link to="/" className="btn btn-primary mx-2 custom-btn">
              HOME
            </Link>
            <Link to="/search" className="btn btn-primary mx-2 custom-btn">
              SEARCH
            </Link>
            <Link to="/signin" className="btn btn-primary mx-2 custom-btn">
              SIGN IN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;