import { React, useEffect, useState } from "react";
import { RESTAURENT_MENU_URL } from "../utills/constants";
import LoadingCards from "./LoadingCards";
import { useParams } from "react-router-dom";
import RestaurentMenuHeader from "./RestaurentMenuHeader";
import useGetAllRestaurent from "../utills/useGetAllRestaurent";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentData = useGetAllRestaurent(RESTAURENT_MENU_URL, resId);

  if (restaurentData === null) {
    return <LoadingCards />;
  }

  return (
    <>
      <RestaurentMenuHeader resMenu={restaurentData} />
    </>
  );
};

export default RestaurentMenu;
