import { useEffect, useState } from "react";

import { MENU_API_URL } from "./constants";

const RestaurantMenuData = (resId) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  const fetchMenuData = async () => {
    const response = await fetch(MENU_API_URL + resId);
    const data = await response.json();
    const resData = data?.data?.cards[0]?.card?.card?.info;
    const resMenuData =
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setRestaurantData(resData);
    setRestaurantMenuData(resMenuData);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return [restaurantData, restaurantMenuData];
};

export default RestaurantMenuData;
