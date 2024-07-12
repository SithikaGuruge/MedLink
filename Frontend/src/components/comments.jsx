import "../components/review.css";
import userImage from "../assets/UserImage.jpg";
function Comment(props) {
  return (
    <>
      <div className="flex my-5">
        <div className="px-2 pt-1">
          <img
            src={props.image}
            alt="User"
            className="h-9.5 w-12 rounded-full"
          />
        </div>
        {/* ------------------------ */}
        <div className="pl-2">
          <div className="flex justify-start">
            <p className="font-semibold text-base">
              {" "}
              {/* Modified line */}
              {props.name}
            </p>
          </div>

          <div className="flex justify-start py-2">
            <p className="text-sm">
              <meter
                className="average-rating"
                min="0"
                max="5"
                value={props.review}
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
              (3.7/5)
            </p>
          </div>

          <div className="flex justify-start">
            <p className="text-left text-sm">{props.commentText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Comment.defaultProps = {
  image: userImage,
  name: "Anonymous User",
  review: 3,
  commentText:
    "Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?  ",
};

export default Comment;
