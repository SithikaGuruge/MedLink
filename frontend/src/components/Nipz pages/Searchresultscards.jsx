// import {useState} from 'react';
import React from 'react';
import IMAGES from './Images';


const Searchresultscards = () => {
    return (
        // card or this?
        <div className="card bg-sky-300"> 
            <div className="flex justify-between">
                <div className="h-34 rounded-md">
                        <IMAGES/>
                  </div>

                <div className='text-left w-100'>
                  <h2 className='font-bold'>MRI Scanning at Katubedda</h2>
                  <div>
                    <h5 className='font-bold'>Available Dates:</h5>
                    <p>2021-10-10</p>
                  </div>

                  
                </div>
                <div>
                    <button className='bg-sky-900 text-white rounded-md mt-20'>Reserve</button>
                </div>
            </div>
        </div>
      );
}
 
export default Searchresultscards;