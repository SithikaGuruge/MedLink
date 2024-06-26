import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
