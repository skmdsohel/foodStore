import {React, useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utills/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utills/useOnlineStatus";
import userContext from "../utills/userContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [loginLogoutBtn, setloginLogoutBtn] = useState("Logout")
  const onlineStatus = useOnlineStatus();
  const {user} = useContext(userContext);
  const cartItems = useSelector(store=>store.cart.items)
  return (
    <div className="flex justify-between px-2 border-2 shadow-md sticky top-0 bg-white z-50">
      <img className="w-10 px-2" src={LOGO_URL} alt="" />
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mx-3">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Search</Link>
          </li>
          <li className="mx-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-3">
            <Link to="/cart" className="p-2 rounded-lg border-3 shadow-lg shadow-orange-400">
              Cart - <span className="text-xl ml-2">{cartItems.length}</span> Items
            </Link>
          </li>
          <li className="mx-3"></li>
        </ul>

        <div className="flex bg-orange-100 m-auto p-2 rounded-md">
          <div className="flex flex-col m-auto">
            <span className="">{user.name}</span>
            <span className="">{user.email}</span>
          </div>
          <button
            className="bg-orange-300 my-auto mx-2 p-2 rounded-md hover:cursor-pointer"
            onClick={() => {
              loginLogoutBtn === "Logout"
                ? setloginLogoutBtn("Login")
                : setloginLogoutBtn("Logout");
            }}
          >
            {loginLogoutBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
