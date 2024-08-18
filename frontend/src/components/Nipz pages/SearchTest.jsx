import {useState} from 'react';
import React from 'react';
import LeafletMapComponent from './LeafletMapComponent'; // Adjust the import path as needed

const SearchTest = () => {

    const [inputValue, setinputValue] = useState('');
  
    const handleChange =(e)=>{
      setinputValue(e.target.value);
    }
    
    return ( 
      <div className="bg-sky-400 rounded-lg">
        <section>
        <h1 className="text-sky-950 text-xl mt-3 my-3 pt-3 font-bold">
  What <span className="text-white">Tests</span> are you searching for?
</h1>
          <div className="text-left mx-8 my-2">
          <label className="text-white">Test type:</label>
          <div className="mt-1">
            <input 
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="rounded-xl text-center w-full h-8"
              placeholder="Test type" 
              />
          </div>
          </div>
  
        <div className="text-left mx-8 my-2">
            <label className="text-white">Enter your location:</label>
            <div className="mt-1">
              <select className="rounded-xl text-gray-500 w-full h-8">
                <option value="1">Kandy</option>
                <option value="2">Colombo</option>
                <option value="3">Matara</option>
              </select>
            </div>
        <div className='py-3'>
        <LeafletMapComponent />
          </div>   
        </div>
        {/* <div>
          <img src="/src/assets/map.png" className="card rounded-lg"></img>
        </div> */}
  
        <div className="space-x-4 py-2 mb-2 col-span-2"> 
          <label className="text-white text-left">From date:</label>
          <input
          type="date"
          value={inputValue}
          onChange={handleChange}
          className="rounded-xl text-center h-8"
          placeholder="From Date" 
          /> 
          <label className="text-white">To date:</label>
          <input
          type="date"
          value={inputValue}
          onChange={handleChange}
          className="rounded-xl text-center h-8"
          placeholder="To Date" 
          /> 
        </div>
        </section>  
      </div>
     );
  }
   
  export default SearchTest;