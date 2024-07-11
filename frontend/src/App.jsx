import React from "react";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login/Login";
import ChannelingPage from "./pages/ChannelingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/channeling" element={<ChannelingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
