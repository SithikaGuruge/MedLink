import React from "react";
import {
  FaLaptopMedical,
  FaBriefcaseMedical,
  FaStethoscope,
  FaClinicMedical,
} from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function Services() {
  const cardStyle =
    "bg-white rounded-xl overflow-hidden shadow-lg px-3 py-5 hover:shadow-2xl hover:bg-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col max-w-xs justify-center items-center mx-auto h-full";
  const iconStyle = "mx-auto text-6xl py-2 ";

  const services = [
    {
      title: "Scans",
      icon: <FaLaptopMedical className={iconStyle} />,
      description:
        "Find the most reliable and closest laboratories that will provide you with their services.",
      onclick: () => {
        window.location.href = "#section-0";
      },
    },
    {
      title: "Tests",
      icon: <ImLab className={iconStyle} />,
      description:
        "Get to know all the reliable and well known laboratories to get your prescribed test today.",
      onclick: () => {
        window.location.href = "#section-1";
      },
    },
    {
      title: "Pharmaceuticals",
      icon: <FaClinicMedical className={iconStyle} />,
      description:
        "Check the availability of the medication that you are looking for prior for stepping into the pharmacy.",
      onclick: () => {
        window.location.href = "#section-2";
      },
    },
    {
      title: "Clinics",
      icon: <FaBriefcaseMedical className={iconStyle} />,
      description:
        "Secure an appointment with your doctor in a time that is significant for you and your loved ones.",
      onclick: () => {
        window.location.href = "#section-3";
      },
    },
    {
      title: "Channeling",
      icon: <FaStethoscope className={iconStyle} />,
      description:
        "Channel your doctor to a time that you are comfortable with.",
      onclick: () => {
        window.location.href = "#section-4";
      },
    },
  ];

  return (
    <div className="bg-gray-400 flex justify-center flex-col py-8">
      <h1 className="text-2xl lg:text-4xl md:text-3xl text-center font-bold text-gray-800">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-5">
        {services.map((service) => {
          return (
            <button
              onClick={service.onclick}
              key={service.title}
              className="focus:outline-none"
            >
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
