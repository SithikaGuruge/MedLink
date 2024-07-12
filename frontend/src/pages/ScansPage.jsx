import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScanCards from "../components/ScanCards";
import SearchBar from "../components/SearchBar";

export default function ScansPage() {
  const data = [
    {
      Name: "MRI Scan",
      Description: "Magnetic resonance imaging",
      Image:
        "https://static01.nyt.com/images/2023/09/18/well/WELL-PRENUVO1/WELL-PRENUVO1-superJumbo.jpg",

      _id: "1",
    },
    {
      Name: "CT Scan",
      Description: "Computed Tomography Scan",
      Image:
        "https://bascnh.com/wp-content/uploads/2023/06/IMG_1232-946x1024.webp",

      _id: "2",
    },
    {
      Name: "X-Ray Scan",
      Description: "Scan Description",
      Image:
        "https://www.nibib.nih.gov/sites/default/files/inline-images/X-ray-system-400x267.jpg",

      _id: "3",
    },
    {
      Name: "Ultrasound Scan",
      Description: "Scan Description",
      Image:
        "https://www.trivitron.com/uploads/category/large/14827624744ultra1.jpg",

      _id: "4",
    },
    {
      Name: "PET",
      Description: "Positron Emission Tomography",
      Image:
        "https://d2yjegym0lbr1w.cloudfront.net/thumbs/petscan_1280.jpg?v=20161004",

      _id: "5",
    },
    {
      Name: "Tomography",
      Description: "Scan Description",
      Image:
        "https://blog.radiology.virginia.edu/wp-content/uploads/2018/04/CT-Scanner-High-Def-min.jpg",

      _id: "6",
    },
    {
      Name: "Fluoroscopy",
      Description: "Scan Description",
      Image:
        "https://www.simonmed.com/wp-content/webpc-passthru.php?src=https://www.simonmed.com/wp-content/uploads/2022/02/fluoroscopy.jpg&nocache=1",

      _id: "7",
    },
    {
      Name: "Angiography",
      Description: "Scan Description",
      Image:
        "https://marketing.webassets.siemens-healthineers.com/1800000006147478/6cd8aaef0873/v/be01900499bd/siemens-healthineers_at_artis-icono-biplane-neuro.jpg",

      _id: "8",
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="mt-20 md:text-5xl text-xl text-center font-bold py-4">
        {" "}
        Scans
      </h1>
      <SearchBar />
      <h2 className="text-center mt-5 text-2xl font-semibold py-4">
        {" "}
        Available Scans
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
