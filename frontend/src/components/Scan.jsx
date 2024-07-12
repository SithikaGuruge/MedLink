import SearchBar from "../components/SearchBar.jsx";
import ScanItem from "../components/Items.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ScanResultsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <SearchBar />
      </div>

      <div className=" text-center lg:text-4xl text-xl font-semibold mb-7 mt-5">
        <p className="">Search Results</p>
      </div>

      <div>
        <ScanItem title="MRI scanning at Nawaloka Hospitals Katubedda" />
        <ScanItem
          title="MRI scanning Asiri Hospitals at Matara"
          location="Matara"
          price="LKR 30,000"
        />
        <ScanItem
          title="MRI scanning at Hemas Hospitals Colombo"
          location="Colombo"
          price="LKR 15,000"
        />
      </div>

      <Footer />
    </div>
  );
}

export default ScanResultsPage;
