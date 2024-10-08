import React from "react";
import coverPhoto from "../assets/Cover.png";
import Services from "../components/Home/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scans from "../components/Home/scans";
import Tests from "../components/Home/tests";
import Pharmaceuticals from "../components/Home/pharmaceuticals";
import Clinics from "../components/Home/clinics";
import Channel from "../components/Home/channel";

export default function HomePage() {
  
  return (
    <div>
    <Navbar />
      <img src={coverPhoto} className="lg:mt-[68px] mt-[56px]" alt="cover" />
      <Services />
      <Scans/>
      <Tests/>
      <Pharmaceuticals/>
      <Clinics/>
      <Channel/>
      <Footer />
    </div>
  );
}
