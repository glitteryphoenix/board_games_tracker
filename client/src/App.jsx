import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Router
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import SignIn from "./pages/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="signin" element={<SignIn />} />
      
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//export default App
