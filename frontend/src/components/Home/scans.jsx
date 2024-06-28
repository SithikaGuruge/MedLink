import React from "react";
import image from "../../assets/Scans.jpeg"

export default function Scans() {
  return (
    <div id="section-0" className="my-10">
      <hr className="bg-blue-500 h-1 w-1/2 mx-auto" />
      <h1 className="my-6 md:text-5xl text-4xl font-bold text-center md:text-start md:ml-20">Scans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
    <img src={image} alt="Scans" className="rounded-xl size-96 mx-auto lg:size-max" />
    <div className="mx-auto">
        <h1 className="lg:text-3xl font-bold text-center text-2xl lg:text-start">ScanSmart: <br/> Precision Imaging at Your Fingertips</h1>
        <h1 className="lg:max-w-lg max-w-sm mx-auto md:text-start text-center lg:text-base py-4">Discover a new era of imaging efficiency with ScanSmart by Medi Link. Seamlessly manage and schedule scans, ensuring timely access to essential diagnostics for improved patient outcomes.</h1>
        <h1 className="bold text-xl text-center font-semibold md:text-start"> MRI</h1>
        <h1 className="lg:max-w-lg max-w-sm mx-auto md:text-start text-center lg:text-base py-4">Provide precise imaging for diagnosing brain, joint, and organ conditions without radiation exposure.</h1>
        <h1 className="bold text-xl text-center font-semibold md:text-start"> CT Scans</h1>
        <h1 className="lg:max-w-lg max-w-sm mx-auto md:text-start text-center lg:text-base py-4">Offer rapid, detailed images crucial for diagnosing injuries, tumors, and internal conditions with exceptional clarity.</h1>
    </div>
      </div>
      <div className="flex justify-center">
      <button className="bg-blue-400 rounded-lg p-2 test-xl font-semibold hover:bg-blue-600">Go To Scans</button>
      </div>
    </div>
  );
}
