import { Outlet, Link } from "react-router-dom";
import { NavigationBar } from "./components/Navigation";

const SignIn = () => {
  return (
    <>
      <NavigationBar />
      <h2 className="title">Sign in</h2>
    </>
  );
};

export default SignIn;
