import React from "react";
import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";

const MenuItemCard = ({ items, categoryName, setShowIndex, showMenuItems }) => {
  const menuItems = items?.card?.card?.itemCards;

  return (
    <div className="menu">
      <div
        className="category-name"
        onClick={() => setShowIndex()}
      >
        <h4>
          {categoryName} ({menuItems.length})
        </h4>
        <p>{showMenuItems ? "🔺" : "🔻"}</p>
      </div>
      {showMenuItems &&
        menuItems.map((menuItem) => {
          const { name, id, price, defaultPrice, imageId, description, isVeg } =
            menuItem?.card?.info;
          return (
            <div className="single-item" key={id}>
              <div>
                <p className="name">
                  {name} {isVeg ? "🟢" : "🔴"}
                </p>
                <p className="price">
                  ₹{price ? price / 100 : defaultPrice / 100}
                </p>
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
