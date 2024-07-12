import SearchBar from "../components/SearchBar.jsx";
import Item from "../components/items.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ScanResultsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-5">
        <SearchBar />
      </div>

      <div className="flex justify-start text-xl font-semibold mb-7 mt-5">
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
