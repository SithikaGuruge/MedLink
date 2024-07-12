import React from "react";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login/Login";
import ChannelingPage from "./pages/ChannelingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayMedicinePage from "./pages/medicine";
import ProductPage from "./pages/product";
import ScanResultsPage from "./pages/ScansResultPage";
import Scan from "./components/Scan";
import MedicinePage from "./pages/SearchMedicinePage";
import ScanPage from "./pages/SearchScansPage";
import TestPage from "./pages/SearchTestsPage";
import ScansPage from "./pages/ScansPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/channeling" element={<ChannelingPage />} />
        <Route path="/display-medicine" element={<DisplayMedicinePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/scan" element={<ScansPage />} />
        <Route path="/scans/type/:id" element={<Scan />} />
        <Route path="/scan-results" element={<ScanResultsPage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/search-scan" element={<ScanPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
