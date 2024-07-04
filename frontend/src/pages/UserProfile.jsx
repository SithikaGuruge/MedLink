import React, { useState, useRef, useEffect } from "react";
import defaultPhoto from "../assets/person.png";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { storage } from "../config/firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProfilePicture = ({ photo, onPhotoChange, onFileChange }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onPhotoChange(URL.createObjectURL(event.target.files[0]));
      const file = event.target.files[0];
      onFileChange(file);
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
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default function UserProfile() {
  const [profilePhoto, setProfilePhoto] = useState(defaultPhoto);
  const [file, setFile] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        console.log("No token found in local storage");
        return;
      }
      try {
        const res = await axios.get(
          "http://localhost:5000/protected/getUserbyID",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setUser({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.contactNumber,
          address: res.data.address,
          age: res.data.age,
          photo: res.data.picture,
        });
        setProfilePhoto(res.data.picture);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const [isEdit, setIsEdit] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    age: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fileSave = async () => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setProfilePhoto(downloadURL);
        user.photo = downloadURL; // Update user photo with Firebase URL
        await axios.post(
          "http://localhost:5000/protected/updateUserbyID",
          user,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log("File available at", downloadURL);
      }
    );
  };

  const handleSave = async () => {
    if (file) {
      await fileSave();
    } else {
      await axios
        .post("http://localhost:5000/protected/updateUserbyID", user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="bg-blue-400 flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-white mt-10">User Profile</h1>
      <div className="flex flex-col items-center justify-center border-2 border-black rounded-xl md:w-1/2 lg:w-1/4 w-3/4 py-8 my-8 bg-slate-300 bg-opacity-50 shadow-lg">
        <ProfilePicture
          photo={profilePhoto}
          onPhotoChange={setProfilePhoto}
          onFileChange={setFile}
        />
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
            Age:{" "}
            <span className="text-blue-800">
              <input
                type="text"
                name="age"
                disabled={!isEdit.age}
                value={user.age}
                onChange={handleChange}
                className="border-2 border-black hover:border-purple-500 rounded-md px-2 max-w-auto"
              />
              <button
                onClick={() => setIsEdit({ ...isEdit, age: !isEdit.age })}
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
            <button
              className="rounded-md px-3 bg-blue-500 hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="rounded-md px-3 bg-yellow-500 hover:bg-yellow-600"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
