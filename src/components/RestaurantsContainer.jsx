import React, { useState } from "react";

import restaurantsData from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";

const RestaurantsContainer = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantsData);
  const [topRated, setTopRated] = useState(false);

  const topRatedBtnHandler = () => {
    setTopRated(!topRated);
    if (!topRated) {
      const filteredRestaurantList = restaurantsData.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setRestaurantList(filteredRestaurantList);
    } else {
      setRestaurantList(restaurantsData);
    }
  };

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
        {restaurantList.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurantData={restaurant} />;
        })}
      </div>
    </>
  );
};

export default RestaurantsContainer;
