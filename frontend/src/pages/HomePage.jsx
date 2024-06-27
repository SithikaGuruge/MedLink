import React from "react";
import coverPhoto from "../assets/Cover.png";
import Services from "../components/Home/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
    <Navbar />
      <img src={coverPhoto} alt="cover" />
      <Services />
      <Footer />
    </div>
  );
}
