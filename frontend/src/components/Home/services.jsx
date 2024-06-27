import React from "react";
import { FaLaptopMedical } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import {
  FaBriefcaseMedical,
  FaStethoscope,
  FaClinicMedical,
} from "react-icons/fa";

export default function Services() {
  const cardStyle =
    "bg-white rounded-xl overflow-hidden shadow-lg px-3 py-5 hover:shadow-2xl hover:bg-gray-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105 max-w-xs";

  const iconStyle = "mx-auto lg:size-20 py-2 size-14 sm:size-14 md:size-16";
  const services = [
    {
      title: "Scans",
      icon: <FaLaptopMedical className={iconStyle} />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      onclick: () => {
        window.location.href = "#scans";
      }
      },
    {
      title: "Tests",
      icon: <ImLab className={iconStyle} />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        onclick: () => {
          window.location.href = "#tests";
        }
      },
    {
      title: "Pharmaceuticals",
      icon: <FaClinicMedical className={iconStyle} />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        onclick: () => {
          window.location.href = "#pharmaceuticals";
        }
    
      },
    {
      title: "Clinics",
      icon: <FaBriefcaseMedical className={iconStyle} />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    
        onclick: () => {
          window.location.href = "#clinics";
        }
      },
    {
      title: "Channeling",
      icon: <FaStethoscope className={iconStyle} />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        onclick: () => {
          window.location.href = "#channeling";
        }
      },
  ];

  return (
    <div className="bg-gray-400 flex justify-center flex-col">
      <h1 className="text-2xl lg:text-4xl md:text-3xl text-center font-bold text-gray-800 mt-4">
        Our Services
      </h1>

      <div className="flex md:flex-row md:space-x-8 space-y-5 my-8 md:space-y-0 justify-center md:mx-8 mx-auto py-5 flex-col">
        {services.map((service) => {
          return (
            <button onClick={service.onclick} key={service.title} className="focus:outline-none">
            <div className={cardStyle}>
              <h1 className="font-bold text-xl lg:text-3xl mb-2 text-center text-slate-600">
                {service.title}
              </h1>
              {service.icon}
              <p className="text-gray-700 md:text-base text-justify py-3 text-sm font-semibold">
                {service.description}
              </p>
            </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
