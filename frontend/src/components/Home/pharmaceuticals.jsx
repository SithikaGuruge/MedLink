import React from "react";
import image from "../../assets/pharmaceuticals.png";

export default function Pharmaceuticals() {
  return (
    <div id="section-2" className="my-10">
      <hr className="bg-blue-500 h-1 w-1/2 mx-auto" />
      <h1 className="my-6 md:text-5xl text-4xl font-bold text-center md:text-start md:ml-20">
      Pharmaceuticals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
        <img
          src={image}
          alt="Scans"
          className="rounded-xl h-64 w-80 sm:w-96 sm:h-80 mx-auto lg:h-[400px] lg:w-[650px] "
        />
        <div className="mx-auto">
          <h1 className="lg:text-3xl font-bold text-center text-2xl lg:text-start">
          Pharmacy at Your Doorstep
          </h1>
          <h1 className="lg:max-w-lg max-w-sm mx-2 sm:mx-auto md:text-start text-center lg:text-base py-4">
          Through MediLink you can discover the convenience of MediLink, where you can effortlessly locate nearby pharmacies, check medicine availability, compare prices, and explore different brands.
          </h1>
          <h1 className="bold text-xl text-center font-semibold md:text-start">
            
            Find Nearby Pharmacies
          </h1>
          <h1 className="lg:max-w-lg max-w-sm mx-2 sm:mx-auto md:text-start text-center lg:text-base py-4">
          Easily locate the nearest pharmacies using our app, ensuring you have quick access to essential medications whenever you need them.
          </h1>
          <h1 className="bold text-xl text-center font-semibold md:text-start">
          Medicine Availability and Pricing
          </h1>
          <h1 className="lg:max-w-lg max-w-sm mx-2 sm:mx-auto md:text-start text-center lg:text-base py-4">
          Stay informed about available medicines, their prices, and brands, allowing you to make the best choices for your healthcare needs.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-400 rounded-lg py-2 md:px-6 px-2 test-xl font-semibold hover:bg-blue-600" onClick={() => window.location.href = '/display-medicine'}>
          Go To Pharmaceuticals
        </button>
      </div>
    </div>
  );
}
