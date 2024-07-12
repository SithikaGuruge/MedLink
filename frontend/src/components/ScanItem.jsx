import image1 from "../assets/ScanMachine.webp";
import icon1 from "../assets/calendar.png";
import icon2 from "../assets/clock.png";
import icon3 from "../assets/place.png";
import "../components/review.css";

function Item(props) {
  return (
    <>
      <div className="flex h-60 ">
        <div className="w-1/4 pl-5 ">
          <img src={image1} className="h-full rounded-xl"></img>
        </div>

        <div className="w-3/4 p-2 pl-0 ">
          <div>
            <p className="flex justify-start font-bold">{props.title}</p>
          </div>

          <br></br>
          <div className="flex h-4/6">
            <div className="w-2/4 flex flex-col ">
              <div className="flex flex-1">
                <img src={icon1} className="max-w-5 max-h-6 mr-2 "></img>
                <p className="flex justify-start font-medium">
                  Available Dates :{" "}
                  <span className="font-normal ml-1">
                    {" "}
                    {props.availableDates}
                  </span>{" "}
                </p>
              </div>

              <div className="flex  flex-1">
                <img src={icon2} className="max-w-5 max-h-6  mr-2  "></img>

                <p className="flex justify-start font-medium">
                  Time: <span className="font-normal ml-1"> {props.time} </span>
                </p>
              </div>

              <div className="flex flex-1">
                <img src={icon1} className="max-w-5 max-h-6  mr-2"></img>

                <p className="flex justify-start font-medium">
                  Available Time Slots:{" "}
                  <span className="font-normal ml-1">
                    {" "}
                    {props.availableTimeSlots}{" "}
                  </span>
                </p>
              </div>

              <div className="flex flex-1">
                <img src={icon3} className="max-w-5 max-h-6  mr-2"></img>

                <p className="flex justify-start font-medium">
                  Location :{" "}
                  <span className="font-normal ml-1"> {props.location} </span>
                </p>
              </div>
            </div>

            <div className=" w-1/4">
              <div className="flex justify-center mt-0">
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
                  (3.7/5)
                </p>
              </div>
            </div>

            <div className=" w-1/4">
              <div className="flex flex-col">
                <p>
                  From <br></br>
                  <strong>{props.price}</strong>
                </p>
                <br></br>
                <button className="bg-blue-900  rounded-3xl p-2 text-gray-100">
                  Reservations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>
    </>
  );
}

Item.defaultProps = {
  image: image1,
  title: "MRI scanning at Katubedda",
  availableDates: ["2024/05/01"],
  time: "",
  availableTimeSlots: [],
  location: "Gampaha",
  price: "LKR 20,000",
};

export default Item;
