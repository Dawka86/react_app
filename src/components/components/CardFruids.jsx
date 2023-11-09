import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import CartPic from "./CardPic";
import { CardData } from "./CardData";
import apple from "./pictures/apple.jpg";
import melon from "./pictures/melon.jpg";
import pineapple from "./pictures/pineapple.jpg";
import watermelon from "./pictures/watermelon.jpg";

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
      <Row style={{ width: "100%" }}>
        <CartPic
          price={4}
          name="apple"
          width="200px"
          pic={apple}
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={7}
          name="melon"
          width="200px"
          pic={melon}
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={3.2}
          name="pineapple"
          width="200px"
          pic={pineapple}
          onAddToCart={setCart}
          cart={cart}
        />

        <CartPic
          price={3}
          name="watermelon"
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
      <CardData cart={cart} onRemoveProduct={handleRemoveProduct} />
    </>
  );
}
