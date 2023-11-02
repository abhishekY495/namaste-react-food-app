import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { MENU_ITEM_IMAGE_CDN } from "../utils/constants";
import plateIcon from "../assets/plate.png";

const ItemCard = ({ menuItem, incart }) => {
  const { name, id, price, defaultPrice, imageId, description, isVeg } =
    menuItem?.card?.info;
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCartbtnHandler = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCartBtnhandler = (item) => {
    const itemId = item?.card?.info?.id;
    const newCartItems = cartItems.filter((item) => {
      return item?.card?.info?.id !== itemId;
    });
    setCartItems(newCartItems);
  };

  return (
    <div className="single-item" key={id}>
      <div>
        <p className="name">
          {name} {isVeg ? "🟢" : "🔴"}
        </p>
        <p className="price">₹{price ? price / 100 : defaultPrice / 100}</p>
        <p className="description">{description}</p>
      </div>
      <div className="menu-item-image">
        <img
          src={imageId ? MENU_ITEM_IMAGE_CDN + imageId : plateIcon}
          alt={name}
        />
        {incart ? (
          <button
            className="remove-cart-btn"
            onClick={() => removeFromCartBtnhandler(menuItem)}
          >
            Remove
          </button>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={() => addToCartbtnHandler(menuItem)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
