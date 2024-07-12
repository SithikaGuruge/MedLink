import SearchBar from "../components/SearchBar.jsx";
import Item from "../components/Items.jsx";
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
        <Item />
        <Item />
      </div>

      <Footer />
    </div>
  );
}

export default ScanResultsPage;
