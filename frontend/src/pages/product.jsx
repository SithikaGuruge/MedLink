import Comment from "../components/Comments.jsx";
import ImageGrid from "../components/ImageGrid.jsx";
import Description from "../components/Description.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

function ProductPage() {
  return (
    <div>
    <div className="px-4 lg:px-8">
      <Navbar />
      <div className="flex items-stretch pt-20 mx-auto max-w-screen-lg">
        <div className="flex-1 h-auto">
          <Description />
        </div>
        <div className="flex-1 h-auto">
          <ImageGrid />
        </div>
      </div>

      <div className="text-center my-6">
        <p className="font-bold lg:text-4xl text-xl">Customer Reviews</p>
      </div>

      <div className="flex flex-col items-center my-6 space-y-4">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>

      
    </div>
    <Footer />
    </div>
  );
}

export default ProductPage;
