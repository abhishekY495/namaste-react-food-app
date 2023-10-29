import React from "react";
import { Link } from "react-router-dom";

import { CDN_URL } from "../utils/constants";

import starRatingIcon from "../assets/starRatingIcon.png";

const RestaurantCard = ({ restaurantData }) => {
  const {
    info: {
      id,
      name,
      locality,
      cloudinaryImageId,
      cuisines,
      sla,
      avgRatingString,
    },
  } = restaurantData;

  return (
    <Link
      key={id}
      to={`/restaurant/${id}`}
      className="restaurant-card"
    >
      <div className="restaurant-details">
        <img
          className="restaurant-image"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <p className="restaurant-name">{name}</p>
        <div className="rating-and-sla">
          <img className="star-logo" src={starRatingIcon} alt="star" />
          <p>{avgRatingString}</p>
          <span>•</span>
          <p>{sla.slaString}</p>
        </div>
        <p className="cuisines-list">{cuisines.join(", ")}</p>
        <p className="locality">{locality}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
