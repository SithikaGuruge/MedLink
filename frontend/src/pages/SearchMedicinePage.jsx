import Input from "../components/Input.jsx";
import arrow from "../assets/right-arrow.png";
import MyComponent from "../components/Map.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function MedicinePage() {
  return (
    <>
      <div>
      <Navbar />
        <section className="pt-5">
          <div
            className=" h-auto  p-16 "
            style={{ backgroundColor: "#A3D9F3" }}
          >
            <p className="text-3xl font-light">
              What{" "}
              <span className="text-blue-900 font-bold mx-2">Medication</span>{" "}
              are you searching for?
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
                <button type="submit">
                  <img src={arrow} className="max-w-10"></img>
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MedicinePage;