import React from "react";
import image from "../../assets/Channeling.jpeg";

export default function Channel() {
  return (
    <div id="section-4" className="my-10">
      <hr className="bg-blue-500 h-1 w-1/2 mx-auto" />
      <h1 className="my-6 md:text-5xl text-4xl font-bold text-center md:text-start md:ml-20">
        Channeling
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
        <img
          src={image}
          alt="Scans"
          className="rounded-xl h-64 w-80 sm:w-96 sm:h-80 mx-auto lg:size-max "
        />
        <div className="mx-auto">
          <h1 className="lg:text-3xl font-bold text-center text-2xl md:text-start">
            Streamline Your Care with E-Channelling
          </h1>
          <h1 className="lg:max-w-lg max-w-sm mx-2 sm:mx-auto md:text-start text-center lg:text-base py-4">
            Experience the future of healthcare with our intuitive e-channelling
            service. Effortlessly book your clinical appointments, browse
            reviews, and choose the best options tailored to your needs. Say
            goodbye to long waits and hello to convenient, personalized care.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-400 rounded-lg py-2 md:px-6 px-2 test-xl font-semibold hover:bg-blue-600" onClick={() => window.location.href = "/channeling"}>
          Go To Channeling
        </button>
      </div>
    </div>
  );
}
