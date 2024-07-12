import React from 'react'
import image from "../../assets/Clinics.jpeg"

export default function Clinics() {
  return (
    <div id="section-3" className="py-10 bg-blue-300 ">
      <hr className="bg-white h-1 w-1/2 mx-auto" />
      <h1 className="my-6 md:text-5xl text-4xl font-bold text-center md:text-start md:ml-20">Clinics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
      <div className="mx-auto order-2 md:order-1">
        <h1 className="lg:text-3xl font-bold text-center text-2xl lg:text-start">Arrange Your Own Clinics</h1>
        <h1 className="lg:max-w-lg max-w-sm mx-2 sm:mx-0 md:text-start text-center lg:text-base py-4 lg:pt-10">With MediLink, users can effortlessly browse and reserve clinical appointments, ensuring a seamless and pleasant experience. Our platform empowers you to read reviews, compare options, and select the clinics that best meet your needs.</h1>
    </div>
    <img src={image} alt="Scans" className="rounded-xl h-64 w-80 sm:w-96 sm:h-80 mx-auto lg:size-max order-1 md:order-2 lg:h-[400px] lg:w-[650px]" />
    
      </div>
      <div className="flex justify-center">
      <button className="bg-white rounded-lg py-2 md:px-6 px-2 test-xl font-semibold hover:bg-slate-300">Go To Clinics</button>
      </div>
    </div>
  )
}
