import React, { useState } from "react";
import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";

const MenuItemCard = ({ items, categoryName }) => {
  const [showMenuItems, setShowMenuItems] = useState(true);
  const menuItems = items?.card?.card?.itemCards;

  return (
    <div className="menu">
      <div
        className="category-name"
        onClick={() => setShowMenuItems(!showMenuItems)}
      >
        <h4>
          {categoryName} ({menuItems.length})
        </h4>
        <p>{showMenuItems ? "🔺" : "🔻"}</p>
      </div>
      {showMenuItems &&
        menuItems.map((menuItem) => {
          const { name, id, price, imageId, description, isVeg } =
            menuItem?.card?.info;
          return (
            <div className="single-item" key={id}>
              <div>
                <p className="name">
                  {name} {isVeg ? "🟢" : "🔴"}
                </p>
                <p className="price">₹{price / 100}</p>
                <p className="description">{description}</p>
              </div>
              <div>
                {imageId && (
                  <img src={MENU_ITEM_IMAGE_CDN + imageId} alt={name} />
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuItemCard;
