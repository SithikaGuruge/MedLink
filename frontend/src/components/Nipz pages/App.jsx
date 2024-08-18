import "./App.css";
// import {useState} from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchScans from "./SearchScans";
import Home from "./Home";
import LeafletMapComponent from "./LeafletMapComponent";
import SearchTest from "./SearchTest";
import SearchMedications from "./SearchMedications";
import SearchResult from "./SearchResult";
import Searchresultscards from "./Searchresultscards";



function App (){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-scans" element={<SearchScans />} />
        <Route path="/search-tests" element={<SearchTest />} />
        <Route path="/search-medications" element={<SearchMedications />} />
        <Route path="/search-result" element={<SearchResult />} />

        <Route></Route>

        
     </Routes>
    </Router>
    // <div>
      
    //   {/* <LeafletMapComponent /> */}
    //   <SearchResult/>
    // </div>




   );
  
}

export default App;