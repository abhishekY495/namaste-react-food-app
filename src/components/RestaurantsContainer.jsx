import React, { useEffect, useState } from "react";

// import restaurantsData from "../utils/mockData";
import { API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";

const RestaurantsContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const searchBtnHandler = () => {
    if (searchTerm.trim().length !== 0) {
      const searchedRestaurantList = restaurantList.filter((restaurant) =>
        restaurant?.info?.name
          .trim()
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
      setFilteredRestaurantList(searchedRestaurantList);
      setSearched(true);
    } else {
      alert("Cannot be empty");
      setSearchTerm("");
    }
  };

  const showAllBtnHandler = () => {
    setFilteredRestaurantList(restaurantList);
    setSearched(false);
    setSearchTerm("");
  };

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

  return (
    <>
      <div className="filters-bar">
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchBtnHandler}>Search</button>
        </div>
        {searched && (
          <button className="show-all-btn" onClick={showAllBtnHandler}>
            Show All
          </button>
        )}
      </div>
      {/*  */}
      <div id="restaurant-container">
        {loading && (
          <>
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </>
        )}
        {apiError && !loading && (
          <p>
            Swiggy API down. <br /> Try after sometime
          </p>
        )}
        {filteredRestaurantList.length === 0 && !loading && !apiError ? (
          <p className="search-error-message">No such Restaurant found</p>
        ) : (
          filteredRestaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant?.info?.id}
                restaurantData={restaurant}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default RestaurantsContainer;
