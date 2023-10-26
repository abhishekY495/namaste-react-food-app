import React, { useEffect, useState } from "react";

import restaurantsData from "../utils/mockData";
import { API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantsContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [topRated, setTopRated] = useState(false);
  const [loading, setLoading] = useState(false);

  const topRatedBtnHandler = () => {
    setTopRated(!topRated);
    if (!topRated) {
      const filteredRestaurantList = restaurantList.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setFilteredRestaurantList(filteredRestaurantList);
    } else {
      setFilteredRestaurantList(restaurantList);
    }
  };

  const fetchRestaurantsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setFilteredRestaurantList(data);
      setRestaurantList(data);
    } catch (error) {
      console.log(error);
      setFilteredRestaurantList(restaurantsData);
      setRestaurantList(restaurantsData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  return (
    <>
      <div className="filters-bar">
        <button
          className={topRated ? "btn-active" : ""}
          onClick={topRatedBtnHandler}
        >
          Top Rated
        </button>
      </div>
      {/*  */}
      <div id="restaurant-container">
        {loading && (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        )}
        {filteredRestaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantsContainer;
