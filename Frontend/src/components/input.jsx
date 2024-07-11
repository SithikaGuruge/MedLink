 

function Input(props){
    return(
        <>
        <label className="">
           <p  className="flex justify-start">{props.label}</p> 
        <input className=" block h-10 w-11/12 p-5 rounded-3xl m-auto mt-5 mb-5"  placeholder={props.placeholder} type={props.type}></input>


        </label>
        </>
        
    );


 }


 Input.defaultProps = {
     placeholder: "Enter ---------------------",
     type: "text",
     label:""
 }

export default Input;