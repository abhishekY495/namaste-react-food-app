import { useEffect, useState } from "react";

import { API_URL } from "./constants";

const useRestaurantsData = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const fetchRestaurantsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      const restaurantsData =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredRestaurantList(restaurantsData);
      setRestaurantList(restaurantsData);
    } catch (error) {
      setApiError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  return [
    restaurantList,
    filteredRestaurantList,
    loading,
    apiError,
    setFilteredRestaurantList,
  ];
};

export default useRestaurantsData;
