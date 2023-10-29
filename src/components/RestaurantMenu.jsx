import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_API_URL } from "../utils/constants";
import starRatingIcon from "../assets/starRatingIcon.png";
import MenuItemCard from "./MenuItemCard";
import MenuShimmerCard from "./MenuShimmerCard";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);
  const { resId } = useParams();

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
              {restaurantMenuData?.map((items, index) => {
                if (items?.card?.card?.itemCards) {
                  return (
                    <MenuItemCard
                      items={items}
                      key={index}
                      categoryName={items?.card?.card?.title}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
