import {React, useContext} from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import { IMG_URL } from "../utills/constants";
import { Link } from "react-router-dom";
import userContext from "../utills/userContext";

const RestaurentCard = (props) => {
  const {user} = useContext(userContext);
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = props.resData?.data;

  return (
    <Link className="res-card card-link" to={"restaurent/" + id}>
      {/* <div> */}
      <img className="res-card-img" src={IMG_URL + cloudinaryImageId} alt="" />
      <h2 className="res-card-name">{name}</h2>
      <h4 className="res-card-cuisine">{cuisines.join(", ")}</h4>
      <div className="res-card-others">
        <StarRating star={parseFloat(avgRating)} />
        <div className="res-card-others-dot">•</div>
        <h4 className="res-card-others-eta">{deliveryTime} MINS</h4>
        <div className="res-card-others-dot">•</div>
        <h4 className="res-card-others-price">₹{costForTwo / 100} FOR TWO</h4>
      </div>
      {/* <span className="m-2 p-2">{user.name}</span> */}
      {/* </div> */}
    </Link>
  );
};
export default RestaurentCard;
