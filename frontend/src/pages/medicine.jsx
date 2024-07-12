import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import M from "../components/M";
import React from "react";
function DisplayMedicinePage() {
    return (
        <div>
          <Navbar />
          <div className="pt-5">
            <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-20 py-10">
              <M />
              <M
                title="HealthVista Pharmacy"
                location="Colombo"
                price="LKR 1200"
                review="1"
              />
              <M />
              <M />
              <M />
              <M />
              <M />
            </div>
          </div>
          <Footer />
        </div>
      );
      
}

export default DisplayMedicinePage;
