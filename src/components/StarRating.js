import React from "react";
import ReactDOM from "react-dom/client";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  return (
    <div
      className={`star-rating flex ${
        props.star >= 4
          ? "bg-green-600"
          : props.star >= 3 && props.star < 4
          ? "bg-orange-600"
          : "bg-red-600"
      }`}
    >
      <FaStar className="starrating-star" />
      {props.star}
    </div>
  );
};
export default StarRating;
