import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import RestaurentCard from "./RestaurentCard";
import { RES_DATA_URL } from "../utills/constants";
import LoadingCards from "./LoadingCards";
import { useNavigate } from "react-router-dom";
import userContext from "../utills/userContext";
// import useGetAllRestaurent from "../utills/useGetAllRestaurent";

const RestaurentcardContainer = () => {
  // const resData = useGetAllRestaurent();
  const navigate = useNavigate();
  // const [topRestaurent, settopRestaurent] = useState(restaurantData);
  const [restaurentList, setrestaurentList] = useState([]);
  const [searchText, setsearchText] = useState("");

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    getRestaurentData(RES_DATA_URL);
  }, []);

  const getRestaurentData = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    setrestaurentList(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  const searchFunctionality = () => {
    const searchResult = restaurentList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setrestaurentList(searchResult);
  };

  const getTopRestaurents = () => {
    setrestaurentList(
      restaurentList.filter((restaurant) => {
        return parseFloat(restaurant.data.avgRating) >= 4.0;
      })
    );
  };
  return (
    <>
      <div className="top-area">
        <div className="search-area">
          <input
            className="search-box"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-300 px-4 py-2 rounded-md hover:cursor-pointer"
            onClick={searchFunctionality}
          >
            Search
          </button>
        </div>
        <div className="my-auto">
          <input
            className="px-2 m-1 border border-orange-300 focus:outline-orange-400"
            type="text"
            name=""
            id=""
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
          <input
            className="px-2 m-1 border border-orange-300 focus:outline-orange-400"
            type="text"
            name=""
            id=""
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <button
          className="bg-orange-300 h-8 my-auto px-3 py-1 rounded-md hover:cursor-pointer"
          onClick={getTopRestaurents}
        >
          GET TOP TESTAURENTS
        </button>
      </div>
      {restaurentList.length > 0 ? (
        <div className="res-card-container">
          {restaurentList.map((restaurant) => (
            // <Link
            //   key={restaurant.data.id}
            //   to={"restaurent/" + restaurant.data.id}
            // >
            <RestaurentCard key={restaurant.data.id} resData={restaurant} />
            // </Link>
          ))}
        </div>
      ) : (
        <LoadingCards />
      )}
    </>
  );
};
export default RestaurentcardContainer;
