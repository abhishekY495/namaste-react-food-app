import { useState } from "react";
import { useParams } from "react-router-dom";

import starRatingIcon from "../assets/starRatingIcon.png";
import MenuItemCard from "./MenuItemCard";
import MenuShimmerCard from "./MenuShimmerCard";
import RestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, restaurantMenuData] = RestaurantMenuData(resId);
  const [showIndex, setShowIndex] = useState(0);

  const menuCategories = restaurantMenuData.filter(
    (menu) => menu?.card?.card?.itemCards
  );

  const setShowIndexCheck = (index) => {
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <>
      <div className="restaurant-menu-container">
        {restaurantData.length === 0 ? (
          <MenuShimmerCard />
        ) : (
          <>
            <div className="restaurant-details-2">
              <div>
                <p className="restaurant-details-name">
                  {restaurantData?.name}{" "}
                </p>
                <p className="restaurant-details-cuisines">
                  {restaurantData?.cuisines.join(", ")}
                </p>
                <p className="restaurant-details-areaname">
                  {restaurantData?.areaName}
                </p>
              </div>
              <div>
                <div className="rating-details">
                  <img src={starRatingIcon} alt="star-rating" />
                  <p>{restaurantData?.avgRating}</p>
                </div>
                <p className="restaurant-details-rating">
                  {restaurantData?.totalRatingsString}
                </p>
              </div>
            </div>
            <div className="restaurant-menu">
              {menuCategories?.map((items, index) => {
                return (
                  <MenuItemCard
                    items={items}
                    key={index}
                    categoryName={items?.card?.card?.title}
                    setShowIndex={() => setShowIndexCheck(index)}
                    showMenuItems={index === showIndex ? true : false}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
