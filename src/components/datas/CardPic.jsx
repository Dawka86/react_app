import React from "react";

function CartPic({ price, name, pic, width, onAddToCart, cart }) {
  return (
    <div className="cart-pic">
      <img src={pic} alt={name} style={{ width: width }} /> {/* Ustaw szerokość obrazka */}
      <div className="product-details">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button onClick={() => onAddToCart([...cart, { name, price }])}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CartPic;
