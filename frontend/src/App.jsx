import React from "react";
import HomePage from "./pages/HomePage";
import ResponsiveAppBar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-black text-3xl flex justify-center items-center text-white">
      <ResponsiveAppBar />
    </div>
  );
};

export default App;
