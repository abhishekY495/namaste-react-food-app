import React, { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import useRestaurantsData from "../utils/useRestaurantsData";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineCard from "./OfflineCard";

const RestaurantsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const isOnline = useOnlineStatus();

  const [
    restaurantList,
    filteredRestaurantList,
    loading,
    apiError,
    setFilteredRestaurantList,
  ] = useRestaurantsData();

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

  if (!isOnline) return <OfflineCard />;

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
        {filteredRestaurantList?.length === 0 && !loading && !apiError ? (
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
