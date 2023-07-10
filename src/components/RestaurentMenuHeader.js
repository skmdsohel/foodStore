import React from "react";
import { BiSolidTimeFive, BiRupee } from "react-icons/bi";
import StarRating from "./StarRating";
import FoodItems from "./FoodItems";

const RestaurentMenuHeader = (props) => {
  const { name, cuisines, avgRating, areaName, costForTwoMessage } =
    props?.resMenu?.cards[0]?.card?.card?.info;
  const { deliveryTime, lastMileTravelString } =
    props?.resMenu?.cards[0]?.card?.card?.info?.sla;
  const { itemCards } =
    props?.resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div className="restaurent-menu-main">
      <div className="restaurent-menu">
        <div className="restaurent-menu-details">
          <h1>{name}</h1>
          <h4>{cuisines}</h4>
          <h4>
            {areaName}, {lastMileTravelString}
          </h4>
        </div>
        <StarRating star={avgRating.toString()} />
      </div>

      <div className="eta-price">
        <div className="eta-price-eta">
          <BiSolidTimeFive className="icon" />
          <h3 className="text">{deliveryTime}</h3>
        </div>
        <div className="eta-price-price">
          <BiRupee className="icon" />
          <h3 className="text">{lastMileTravelString}</h3>
        </div>
      </div>

      {itemCards.map((item) => {
        return <FoodItems key={item.card.info.id} item={item?.card?.info} btnAdd={true}></FoodItems>;
      })}
    </div>
  );
};

export default RestaurentMenuHeader;
