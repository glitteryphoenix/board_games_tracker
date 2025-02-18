// TODO: delete routes
// TODO: import app.jsx + delete unused imports

//IMPORTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//ROUTER
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search.jsx";
import SignIn from "./pages/Signin.jsx";
import MoreDetails from "./pages/components/MoreDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="details/:id" element={<MoreDetails />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
