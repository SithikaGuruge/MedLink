import {useState} from 'react';
import React from 'react';
import Searchresultscards from './Searchresultscards';

const SearchResult = () => {
    const [inputValue, setinputValue] = useState('');
  
    const handleChange =(e)=>{
      setinputValue(e.target.value);
    }
    return ( 
        <div className="search-result">
        <div className='bg-sky-400 flex justify-between items-baseline'>

        <div className=''>
        <div className="text-left mx-8 my-2">
          <label className="text-white">Scan type:</label>
          <div className="mt-1">
            <input 
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="rounded-xl text-center w-full h-8"
              placeholder="Scan type" 
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
            </div>
            </div> 

        <div className=''>
        
        <div className="space-x-4 py-2 mb-2 col-span-2 flex justify-between items-baselin mx-2">
            <div className=''>
                <label className="text-white text-left">From date:</label>
                <div>
                    <input
                    type="date"
                    value={inputValue}
                    onChange={handleChange}
                    className="rounded-xl text-center h-8"
                    placeholder="From Date" 
                    /> 
                </div>
            </div>
        <div>
          <label className="text-white">To date:</label>
          <div>
            <input
            type="date"
            value={inputValue}
            onChange={handleChange}
            className="rounded-xl text-center h-8"
            placeholder="To Date" 
            />
          </div>
          </div>
        </div>

        <div className="space-x-4 py-2 mb-2 col-span-2 flex justify-between mx-2"> 
            <div className=' '>
          <label className="text-white text-left">From time:</label>

          <div>
            <input
                type="time"
                value={inputValue}
                onChange={handleChange}
                className="rounded-xl text-center h-8"
                placeholder="From Date" 
                /> 
            </div>

            </div>
            <div className=''>
          <label className="text-white text-left">To time:</label>

          <div>
            <input
                type="time"
                value={inputValue}
                onChange={handleChange}
                className="rounded-xl text-center h-8"
                placeholder="From Date" 
                /> 
            </div>

            </div>

          
        </div>
        </div>
        
        </div>
        <div className='bg-sky-300'>
            <h3 className='text-left font-bold mx-2 '>Search Results</h3>
        <div>
            <Searchresultscards/>
        </div>
        <div>
            <Searchresultscards/>
        </div>
        <div>
            <Searchresultscards/>
        </div>
        <div>
            <Searchresultscards/>
        </div>
        <div>
            <Searchresultscards/>
        </div>
        </div>
        </div>
        
     );
}
 
export default SearchResult;