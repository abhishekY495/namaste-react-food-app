import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import ItemCard from "./ItemCard";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-items-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => {
        return <ItemCard menuItem={item} key={item?.card?.info?.id} incart />;
      })}
    </div>
  );
};

export default Cart;
