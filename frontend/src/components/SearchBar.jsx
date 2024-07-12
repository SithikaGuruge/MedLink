 
 import Input from './Input.jsx';
 function SearchBar(){
    return(
        <>
        <div className="flex justify-center " style={{ backgroundColor: '#A3D9F3'} }>
            <div className="w-5/12">
            <p className='text-start font-semibold mt-3 ml-7 mb-0'>Scan Type :</p>
            <Input placeholder="Scan type"  ></Input>
            <p className='text-start font-semibold mt-3 ml-7 '>Location :</p>
            <Input placeholder="Location"></Input>
            </div>


            <div className="w-3/12 ">
            <p className='text-start font-semibold mt-3 ml-7 '>From Date :</p>
            <Input type="date" placeholder="" label=""></Input>
            <p className='text-start font-semibold mt-3 ml-7 '>From :</p>
            <Input type="time"></Input>
            </div>

            <div className="w-3/12">
            <p className='text-start font-semibold mt-3 ml-7 '>To Date :</p>
            <Input type="date"></Input>
            <p className='text-start font-semibold mt-3 ml-7 '>To :</p>
            <Input  type="time"></Input>
            </div>

        </div>
        </>
    );




 }


 export default SearchBar;