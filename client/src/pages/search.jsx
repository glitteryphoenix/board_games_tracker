import { Outlet, Link } from "react-router-dom";

const Search = () => {
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
<p>This is search</p>
      <Outlet />
    </>
  );
};

export default Search;
