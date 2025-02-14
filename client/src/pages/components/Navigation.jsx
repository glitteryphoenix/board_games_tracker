import { Outlet, Link } from "react-router-dom";

export const NavigationBar = () => {
return (
<nav class="">
  <ul>
    <h1>Board Games Tracker</h1>
    <li> <Link to="/"> Home </Link> </li>
    <li>  <Link to="/search"> Search </Link> </li>
    <li> <Link to="/signin"> Sign In </Link> </li>
  </ul>
</nav>
);
};
