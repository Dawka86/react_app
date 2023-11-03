import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import CartPic from "./CartPic";
import { CardData } from "./CardData";

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
        <CartPic price={4} onAddToCart={setCart} cart={cart} />
        <CartPic price={7} onAddToCart={setCart} cart={cart} />
        <CartPic price={3.2} onAddToCart={setCart} cart={cart}/>
      </Row>
      <br></br>
      <Button variant="success">Suma zamówień: {calculateTotalPrice().toFixed(2)} zł</Button>
      <CardData cart={cart} onRemoveProduct={handleRemoveProduct} />
    </>
  );
}
