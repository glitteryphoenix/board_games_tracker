import { Outlet, Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Board Games Tracker</Link>
        <div>
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
        </div>
      </div>
    </nav>
  );
};
