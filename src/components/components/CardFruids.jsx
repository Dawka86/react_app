import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import CartPic from "./CardPic";
import { CardData } from "./CardData";
import apple from "./pictures/apple.jpg";
import melon from "./pictures/melon.jpg";
import pineapple from "./pictures/pineapple.jpg";
import watermelon from "./pictures/watermelon.jpg";
import troley from "./pictures/trolley.png";
import "./cart.css";

export function CardFruits() {
  const [cart, setCart] = useState([]); // Stan koszyka

  // Funkcja do obliczania sumy cen produktów w koszyku
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.weight, 0);
  };

  const handleRemoveProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className="title">
        Say <span>YES</span> to fruit <img src={troley} alt="troley"/>
         ...
      </h1>
      <Row style={{ width: "100%" }}>
        <CartPic
          price={4}
          name="Apple"
          width="200px"
          pic={apple}
          height="320px"
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={7}
          name="Melon"
          width="200px"
          height="320px"
          pic={melon}
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={3.2}
          name="Pineapple"
          width="200px"
          height="320px"
          pic={pineapple}
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={3}
          height="320px"
          name="Watermelon"
          width="200px"
          pic={watermelon}
          onAddToCart={setCart}
          cart={cart}
        />
      </Row>
      <br></br>
      <Button variant="success">
        Suma zamówień: {calculateTotalPrice().toFixed(2)} zł
      </Button>
      <CardData cart={cart} totalPrice={calculateTotalPrice().toFixed(2)} onRemoveProduct={handleRemoveProduct} />
    </>
  );
}
