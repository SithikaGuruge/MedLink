import Comment from "../components/comments.jsx";
import ImageGrid from "../components/ImageGrid.jsx";
import Description  from "../components/description.jsx";

function ProductPage(){

    return(
        <>
  <div className="flex items-stretch">
  <div className="flex-1 h-auto ">
    <Description />
  </div>
  <div className="flex-1 h-auto">
    <ImageGrid />
  </div>
  <div>

   
  </div>

 
  
</div>

<div>
  <p className="text-start font-bold text-2xl my-3">
        Customer Reviews
    </p>
  </div>


        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      

        </>

    )
}

export default ProductPage;