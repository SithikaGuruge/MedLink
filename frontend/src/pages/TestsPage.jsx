import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScanCards from "../components/ScanCards";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function TestsPage() {
    console.log('hi')
  const navigation = useNavigate();

  const data = [
    {
      Name: "CBC Test",
      Description: "Complete Blood Count",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8kef6T_Ivjcct6vJ_gQOhqNBX_81rtvVzg&s",

      _id: "1",
    },
    {
      Name: "BMP",
      Description: "Basic Metabolic Panel",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_Q2xkwafsvFEOFXG1fLZa-c_apyptFnuzQ&s",

      _id: "2",
    },
    {
      Name: "Lipid Panel",
      Description: "Measures cholesterol and triglycerides levels",
      Image:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/11/shutterstock_434242036.jpg",

      _id: "3",
    },
    {
      Name: "LFT",
      Description: "Liver Function Tests",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZqkIoEWkI4yAcZAOhT9BIvJozsWbXATAug&s",

      _id: "4",
    },
    {
      Name: "Thyroid Function Tests",
      Description: "Measures levels of thyroid hormones (TSH, T3, T4)",
      Image:
        "https://cdn.prod.website-files.com/5e0143c66e14efc18c6f469d/644fe5bf8f79f6a0c8925975_sing%20(8).jpg",

      _id: "5",
    },
    {
      Name: "Urinalysis",
      Description: "Analyzes the content of urine, including appearance, concentration, and content",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlswRgo06mSdPTUHEWdvpmN5r0Bojdi3oBA&s",

      _id: "6",
    },
    {
      Name: "HbA1c",
      Description: "Measures average blood sugar levels over the past two to three months",
      Image:
        "https://th-i.thgim.com/public/sci-tech/science/2eub64/article67949541.ece/alternates/FREE_1200/fauzan-my-coeA8_DvtoU-unsplash.jpg",

      _id: "7",
    },
    {
      Name: "Vitamin D Test",
      Description: "Measures the level of vitamin D in the blood",
      Image:
        "https://www.cancer.ie/sites/default/files/styles/widescreen_television/public/2020-01/Website%20images%20%287%29_1.jpg?h=920929c4&itok=i7nd3ISp",

      _id: "8",
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="mt-20 md:text-5xl text-xl text-center font-bold py-4">
        {" "}
        Tests
      </h1>
      <SearchBar />
      <button
        onClick={() => {
          navigation("/search-scan");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5 ml-5"
      >
        Go to adavanced search
      </button>
      <h2 className="text-center mt-5 text-2xl font-semibold py-4">
        {" "}
        Available Tests
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 mx-auto py-10">
        {data.map((item) => (
          <ScanCards
            key={item._id}
            CentreName={item.Name}
            description={item.Description}
            image={item.Image}
            id={item._id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
