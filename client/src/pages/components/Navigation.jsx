import { Outlet, Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: "#0066ff" }}>
      <div className="container-fluid d-flex align-items-center">
        
        {/* Left-aligned title - Bigger, Bolder, Bright White */}
        <Link 
          className="navbar-brand text-white fw-bold m-0" 
          to="/" 
          style={{ fontSize: "2rem", fontWeight: "900", color: "#ffffff" }}
        >
          Board Games Tracker
        </Link>

        {/* Right-aligned navigation links */}
        <div className="ms-auto">
          <ul className="navbar-nav d-flex flex-row gap-4 align-items-center">
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-bold" 
                to="/" 
                style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-bold" 
                to="/search" 
                style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff" }}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-bold" 
                to="/signin" 
                style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff" }}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
