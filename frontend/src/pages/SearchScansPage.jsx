import Input from "../components/input.jsx";
import arrow from "../assets/right-arrow.png";
import MyComponent from "../components/Map.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ScanPage() {
  return (
    <div>
    <Navbar />
      <section className="pt-5">
        <div className=" h-auto  p-16 " style={{ backgroundColor: "#A3D9F3" }}>
          <p className="text-3xl font-light">
            What <span className="text-blue-900 font-bold mx-2">Scans</span> are
            you searching for?
          </p>
          <div>
            <form onSubmit={""}>
              <div>
                {" "}
                <Input placeholder="Scan Type"></Input>{" "}
              </div>
              <div>
                {" "}
                <Input placeholder="Select Location"></Input>
              </div>

              <div className="">
                {" "}
                <MyComponent />{" "}
              </div>
              <br></br>

              <div className="grid grid-cols-2  w-full p-1 mx-auto">
                <Input
                  placeholder="From Date"
                  type="date"
                  label="From date:"
                ></Input>
                <Input
                  placeholder="To Date"
                  type="date"
                  label="To date:"
                ></Input>
                <Input
                  placeholder="From Time"
                  type="time"
                  label="From time:"
                ></Input>
                <Input
                  placeholder="To time"
                  type="time"
                  label="To time:"
                ></Input>
              </div>

              <button type="submit">
                <img src={arrow} className="max-w-10"></img>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ScanPage;
