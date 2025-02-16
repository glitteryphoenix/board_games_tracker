import { Outlet, Link } from "react-router-dom";
import { NavigationBar } from "./components/Navigation";

const Search = () => {
  return (
    <>
      <NavigationBar />
      <h2 className="title">Search</h2>
    </>
  );
};

export default Search;
