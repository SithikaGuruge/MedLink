import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
export default function Footer() {
  return (
    <div className="bg-blue-500 max-w-full w-full text-center py-2">
      <div className="flex flex-row space-x-4 sm:space-x-10 lg:space-x-20 justify-center my-2 ">
      <div className="flex justify-center items-center flex-col ml-1 sm:ml-0">
        <img src={logo} alt="logo" className="lg:h-12 lg:w-12 sm:h-10 sm:w-10 h-8 w-8" />
        <h1 className="font-bold lg:text-base text-[8px] sm:text-[10px] md:text-[12px]">MediLink</h1>
        </div>
        <p className="lg:max-w-xs sm:max-w-[100px] max-w-[80px] text-left font-semibold lg:text-base text-[8px] sm:text-[10px]">
          Medi Link redefines healthcare management with intuitive web-based
          solutions, ensuring effortless coordination of scans, clinics, and
          pharmaceuticals for optimal patient care.
        </p>
        <div className="flex flex-col text-left items-start">
          <h1 className="lg:text-base font-bold text-[10px] sm:text-[12px] md:text-[14px]">About Us</h1>
          <div className="flex flex-col text-white space-y-1 lg:text-base text-[8px] sm:text-[10px] md:text-[12px]">
            <div className="flex flex-row items-center ">
              <IoIosArrowForward /> <a href="#mission" className=" hover:text-slate-300">Mission and Vission</a>
            </div>
            <div className="flex flex-row items-center">
              <IoIosArrowForward />
              <a href="#company" className=" hover:text-slate-300">Our Company</a>
            </div>
            <div className="flex flex-row items-center">
              <IoIosArrowForward />
              <a href="#product" className=" hover:text-slate-300">Our Products</a>
            </div>
            <div className="flex flex-row items-center">
              <IoIosArrowForward />
              <a href="#team" className=" hover:text-slate-300">Our Team</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h1 className="lg:text-base font-bold text-[10px] sm:text-[12px] md:text-[14px]">Discover</h1>
          <div className="flex flex-col text-white space-y-1 lg:text-base text-[8px] sm:text-[10px] md:text-[12px]">
            <div className="flex flex-row items-center">
              <IoIosArrowForward /> <a href="#projects" className=" hover:text-slate-300">Projects & Researches</a>
            </div>
            <div className="flex flex-row items-center">
              <IoIosArrowForward />
              <a href="#reviews" className=" hover:text-slate-300">Clients Reviews</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h1 className="lg:text-base font-bold text-[10px] sm:text-[12px] md:text-[14px]">Userful Links</h1>
          <div className="flex flex-col text-white space-y-1 lg:text-base text-[8px] sm:text-[10px] md:text-[12px]">
            <div className="flex flex-row items-center">
              <IoIosArrowForward /> <a href="#contsctUs" className=" hover:text-slate-300">Contact Us</a>
            </div>
            <div className="flex flex-row items-center">
              <IoIosArrowForward />
              <a href="#terms" className=" hover:text-slate-300">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
