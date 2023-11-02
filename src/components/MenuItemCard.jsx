import React from "react";

import ItemCard from "./ItemCard";

const MenuItemCard = ({ items, categoryName, setShowIndex, showMenuItems }) => {
  const menuItems = items?.card?.card?.itemCards;

  return (
    <div className="menu">
      <div className="category-name" onClick={() => setShowIndex()}>
        <h4>
          {categoryName} ({menuItems.length})
        </h4>
        <p>{showMenuItems ? "🔺" : "🔻"}</p>
      </div>
      {showMenuItems &&
        menuItems.map((menuItem) => {
          return (
            <ItemCard menuItem={menuItem} key={menuItem?.card?.info?.id} />
          );
        })}
    </div>
  );
};

export default MenuItemCard;
