// TODO: delete routes
// TODO: import app.jsx + delete unused imports

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Router
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search.jsx";
import SignIn from "./pages/SignIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
      </Routes> */}
    </BrowserRouter>
  </StrictMode>
);
