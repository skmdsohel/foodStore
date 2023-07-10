import React from "react";
import { BiSolidTimeFive, BiRupee } from "react-icons/bi";
import { IMG_URL } from "../utills/constants";
import {} from "react-redux"
import {addItem} from "../store/cartSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux"

const FoodItems = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(store=>store.cart.items)

  const handleAddtoCart = (item) => {
    dispatch(addItem(item))
  }


  const { name, price, description, imageId } = props?.item;
  const { btnAdd } = props;
  return (
    <div className="flex justify-between my-4 shadow-md rounded-lg py-4 px-3 hover:shadow-xl">
      <div className="w-[85%] pr-4">
        <h2>{name}</h2>
        <h3>₹{price / 100}</h3>
        <h5>{description}</h5>
      </div>
      <div className="w-[15%] relative">
        <img className="rounded-lg" src={IMG_URL + imageId} alt="" />
        {btnAdd && <button className="bg-white px-4 py-1 shadow-md absolute top-3/4 left-1/4 mx-auto rounded-md" onClick={()=>handleAddtoCart(props)}>
          ADD
        </button>}
      </div>
    </div>
  );
};

export default FoodItems;
