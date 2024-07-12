import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function ChannelDoctor() {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
  const {
    data,
    loading,
    isPending: Pendingdoctor,
  } = useFetch(`${url}/doctor/channel/${id}`);
  return (
    <div className="pt-20">
      <p className="text-4xl font-bold text-center">{data.Name}</p>
      <div className="grid grid-cols-2">
        <img src={data.Photo} alt={data.Name} className=" mx-auto py-5" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-lg font-semibold py-5">Type: {data.Type}</p>
          <Rating
            className="mx-auto"
            size="large"
            precision={0.5}
            value={data.Rating}
            readOnly
          />
          <p className="text-lg font-semibold py-5">Fee: {data.Fee}</p>
          <form className="space-y-4">
            <div className="flex">
              <label
                htmlFor="date"
                className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2 font-semibold"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Date"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="time-from"
                className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2 font-semibold"
              >
                Time from
              </label>
              <input
                type="time"
                id="time-from"
                name="time-from"
                className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Time"
              />
            </div>
            <div className="flex ">
              <label
                htmlFor="time-to"
                className="block text-gray-700 text-sm mb-2 w-20 text-start mt-2 font-semibold"
              >
                To
              </label>
              <input
                type="time"
                id="time-to"
                name="time-to"
                className="w-40 p-2 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Time"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={(e) => {
                e.preventDefault();
                if (
                  typeof data.PaymentLink === "string" &&
                  data.PaymentLink.trim() !== ""
                ) {
                  window.location.href = data.PaymentLink;
                } else {
                  console.error("Invalid PaymentLink:", data.PaymentLink);
                }
              }}
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
