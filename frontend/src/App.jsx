import React from "react";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
