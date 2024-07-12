import React from "react";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login/Login";
import PaymentGateway from "./components/PaymentGateway";
import Channeling from "./components/Channeling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayMedicinePage from "./pages/medicine";
import ProductPage from "./pages/product";
import ScanResultsPage from "./pages/ScansResultPage";
import MedicinePage from "./pages/SearchMedicinePage";
import ScanPage from "./pages/SearchScansPage";
import TestPage from "./pages/SearchTestsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/channeling" element={<Channeling />} />
        <Route path="/display-medicine" element={<DisplayMedicinePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/scan-results" element={<ScanResultsPage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
