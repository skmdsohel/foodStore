import React from "react";
import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import {useDispatch} from "react-redux";
import { clearCart } from "../store/cartSlice";
import {Link} from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  const totalCartVal = cartItems.reduce((accumulator, current, index, list)=>{
    return accumulator+=current.item.price;
  },0);
  const clearCartItems = () => {
    console.log('first')
    dispatch(clearCart());
  }

  return cartItems.length > 0 ? (
    <div className="flex">
      <div className="flex flex-col w-3/4 mx-auto my-2 px-4">
        <button
          className="w-fit p-2 bg-orange-500 text-white rounded-md border-2 hover:bg-orange-600"
          onClick={() => clearCartItems()}
        >
          Clear Cart
        </button>
        {cartItems.map((item) => {
          return (
            <FoodItems key={item?.item?.id} item={item?.item} btnAdd={false} />
          );
        })}
      </div>
      <div className="flex flex-col w-1/4 mx-4 my-4 py-4 px-4 border h-fit shadow-lg rounded-lg">
        {cartItems.map((item) => {
          return (
            <div className="flex justify-between">
              <span className="text-sm my-1">{item.item.name}</span>
              <span className="text-sm my-1">₹ {item.item.price / 100}</span>
            </div>
          );
        })}
        <div className="flex justify-between mt-4">
          <span className="text-xl my-2">Total Amont</span>
          <span className="text-xl my-2">
            ₹ {parseFloat(totalCartVal / 100)}
          </span>
        </div>
        <button className="w-full py-2 bg-green-700 text-white rounded-md border-2 hover:bg-green-500">
          Proceed to Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col h-[90vh] items-center justify-center">
      <button className="px-4 py-2 my-auto justify-center w-fit bg-orange-200 rounded-md">
        <Link to="/">Brouse Restaurents</Link>
      </button>
    </div>
  );
};

export default Cart;
