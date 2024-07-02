import React, { useState, useRef } from "react";
import photo from "../assets/person.png";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const ProfilePicture = ({ photo, onPhotoChange }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onPhotoChange(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="relative w-32 h-32">
      <img
        src={photo}
        alt="profile"
        className="rounded-full w-full h-full object-cover"
      />
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black rounded-full p-2 hover:bg-slate-500 cursor-pointer"
        onClick={handleIconClick}
      >
        <MdEdit className="h-6 w-6 text-white" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123, Main Street, Bangalore",
  });

  const [profilePhoto, setProfilePhoto] = useState(photo);
  const [isEdit, setIsEdit] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-blue-400 flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-white mt-10">User Profile</h1>
      <div className="flex flex-col items-center justify-center border-2 border-black rounded-xl md:w-1/2 lg:w-1/4 w-3/4 py-8 my-8 bg-slate-300 bg-opacity-50 shadow-lg">
        <ProfilePicture photo={profilePhoto} onPhotoChange={setProfilePhoto} />
        <div className="my-6">
          <p className="text-lg my-3">
            User Name:{" "}
            <span className="text-blue-800">
              <input
                type="text"
                name="name"
                disabled={!isEdit.name}
                value={user.name}
                onChange={handleChange}
                className="border-2 border-black hover:border-purple-500 rounded-md px-2"
              />
              <button
                onClick={() => setIsEdit({ ...isEdit, name: !isEdit.name })}
                className="ml-2"
              >
                <FaEdit />
              </button>
            </span>
          </p>
          <p className="text-lg my-3">
            Email:{" "}
            <span className="text-blue-800">
              <input
                type="text"
                name="email"
                disabled
                value={user.email}
                onChange={handleChange}
                className="border-2 border-black rounded-md px-2"
              />
            </span>
          </p>
          <p className="text-lg my-3">
            Phone:{" "}
            <span className="text-blue-800">
              <input
                type="text"
                name="phone"
                disabled={!isEdit.phone}
                value={user.phone}
                onChange={handleChange}
                className="border-2 border-black hover:border-purple-500 rounded-md px-2"
              />
              <button
                onClick={() => setIsEdit({ ...isEdit, phone: !isEdit.phone })}
                className="ml-2"
              >
                <FaEdit />
              </button>
            </span>
          </p>
          <p className="text-lg my-3">
            Address:{" "}
            <span className="text-blue-800">
              <input
                type="text"
                name="address"
                disabled={!isEdit.address}
                value={user.address}
                onChange={handleChange}
                className="border-2 border-black hover:border-purple-500 rounded-md px-2 max-w-auto"
              />
              <button
                onClick={() =>
                  setIsEdit({ ...isEdit, address: !isEdit.address })
                }
                className="ml-2"
              >
                <FaEdit />
              </button>
            </span>
          </p>
          <div className="flex flex-row justify-center mt-8 space-x-5">
            <button className="rounded-md px-3 bg-blue-500 hover:bg-blue-600">
              Save
            </button>
            <button className="rounded-md px-3 bg-yellow-500 hover:bg-yellow-600">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
