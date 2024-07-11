 

 import SearchBar from '../components/SearchBar.jsx';
import Input from '../components/input.jsx';
 import Item from '../components/items.jsx';

 function ScanResultsPage(){

    return(
        <>
        <div>
            <div>
                <SearchBar/>
            </div>

            <div className="flex justify-start text-xl font-semibold mb-7 mt-5">
                <p className="">Search Results</p>

            </div>
                
            <div>
                <Item/>
                
                <Item/>
            </div>

        </div>
        </>
    


    );
       

   
    

 }

 export default ScanResultsPage;