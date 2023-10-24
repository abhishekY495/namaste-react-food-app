import React from "react";

import restaurantList from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";

const RestaurantsContainer = () => {
  return (
    <div id="restaurant-container">
      {restaurantList.map((restaurant, index) => {
        return <RestaurantCard key={index} restaurantData={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantsContainer;
