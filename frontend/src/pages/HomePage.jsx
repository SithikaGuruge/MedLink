import React from "react";
import coverPhoto from "../assets/Cover.png";
import Services from "../components/Home/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scans from "../components/Home/scans";

export default function HomePage() {
  return (
    <div>
    <Navbar />
      <img src={coverPhoto} alt="cover" />
      <Services />
      <Scans/>
      <Footer />
    </div>
  );
}
