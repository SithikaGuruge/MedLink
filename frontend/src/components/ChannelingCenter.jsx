import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import DoctorCard from "./Doctors";

export default function ChannelingCenter() {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
  const {
    data: center,
    error,
    isPending,
  } = useFetch(`${url}/serviceProvider/${id}`);
  const {
    data: doctorDetails,
    loading,
    isPending: Pendingdoctor,
  } = useFetch(`${url}/doctor/${id}`);

  if (isPending) return <div>Loading...</div>;
  if (Pendingdoctor) return <div>Doctors Loading...</div>;
  return (
    <div>
      {center && (
        <div className=" mt-20">
          <h1 className="text-4xl text-center font-bold py-5">{center.Name}</h1>
          <img src={center.Image} alt={center.Name} className="w-1/2 mx-auto py-5" />
          <p className="text-center text-lg font-semibold py-5">
            {center.Description}
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto lg:py-10">
            <h1 className="lg:text-3xl text-xl text-center">Address</h1>
            <p className="text-center">{center.Address}</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto lg:py-10">
            <h1 className="lg:text-3xl text-xl text-center">Location</h1>
            <iframe
              src={center.Location}
              width="500"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto lg:py-10">
            <h1 className="lg:text-3xl text-xl text-center">Rating</h1>
            <Rating
              className="mx-auto"
              name="half-rating-read"
              size="large"
              precision={0.5}
              value={parseFloat(center.Rating)}
              readOnly
            />
          </div>
          <h1 className="text-4xl font-bold text-center py-5">Our Doctors</h1>
          <div className=" mx-16 py-10">
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 mx-auto">
    {doctorDetails.map((doctor) => (
      <DoctorCard
        key={doctor._id}
        Name={doctor.Name}
        Age={doctor.Age}
        Type={doctor.Type}
        Fee={doctor.Fee}
        Photo={doctor.Photo}
        rating={doctor.Rating}
        id={doctor._id}
      />
    ))}
  </div>
</div>
        </div>
      )}
    </div>
  );
}
