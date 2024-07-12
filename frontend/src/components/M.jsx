import { useState } from "react";
import React from "react";

import "../components/review.css";

function M(props) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="max-w-sm mx-3.5 bg-[#A3D9F3] border border-solid border-r-4 rounded-2xl shadow-lg p-4 my-4 pt-1">
      <div className="flex justify-end mt-0">
        <p>
          <meter
            class="average-rating "
            min="0"
            max="5"
            value={props.review}
            title="4.3 out of 5 stars"
          >
            4.3 out of 5
          </meter>
        </p>
      </div>
      <div className="text-2xl text-black font-bold mb-2 ">{props.title}</div>
      <div className="text-lg text-gray-800 mb-2">
        <p className="my-2 font-semibold">
          Location: <span className="font-normal">{props.location}</span>{" "}
        </p>
        <p className="my-2 font-semibold">
          Price: <span className="font-normal">{props.price}</span>
        </p>
      </div>
      <hr className="border-black my-2"></hr>

      <div className="flex mb-4 ">
        <div className="w-2/3">
          <p className="text-base mr-2 inline">Quantity:</p>
          <button
            onClick={handleDecrease}
            className=" text-gray-800   py-1 px-2 rounded-l-full w-5"
          >
            -
          </button>
          <span className="mx-2 font-bold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className=" text-gray-800  py-1 px-2 rounded-r-full w-5"
          >
            +
          </button>
        </div>

        <div>
          <p className="flex justify-end w-auto text-sm  text-red-900 italic">
            Out Of Stocks
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-blue-900  w-2/4 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
          Buy
        </button>
      </div>
    </div>
  );
}

M.defaultProps = {
  title: "MediCore Pharmacy",
  location: "Gampaha",
  price: "LKR 1000",
  review: "4.5",
  //quantity: "1"
};
export default M;

// return(
//     <div className=" border border-solid border-r-4  rounded-2xl p-0.5 inline-block  mx- "style={{ backgroundColor: '#A3D9F3'  ,margin: '2%'}}>

//     <div className="text-3xl  text-blue-900 font-semibold ">
//         {props.title}
//     </div>

//      <div>
//          <p>Location : {props.location} </p>
//          <p>Price : {props.price} </p>
//      </div>

//      <div>
//          <p> Quantity : </p>
//      </div>

//      <div>
//         <button>
//             <p>Buy</p>
//         </button>
//      </div>

//     </div>
// );