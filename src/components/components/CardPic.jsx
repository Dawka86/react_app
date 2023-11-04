import React, { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
} from "react-bootstrap";
import "./cart.css";

export default function CartPic({ price, name, pic, width }) {
  const [weight, setWeight] = useState(0);
  const [carts, setCarts] = useState([]); // Tablica produktów

  const handleAddToCarts = (product) => {
    setCarts([...carts, product]);
  };

  const productPrice = price * weight;

  function handleChange(e) {
    const newValue = e.target.value;
    if (newValue >= 0) {
      setWeight(newValue);
    } else {
      alert("Waga owocow nie moze byc mniejsza od 0kg");
    }
  }

  return (
    <Col style={{ border: "1px solid black" }} xs={3} md={2}>
      <Image src={pic} thumbnail alt={name} style={{ width: width }} />
      <FormGroup>
        <FormLabel>Waga zamowienia!</FormLabel>
        <p>Cena: {price} zł za kg.</p>
        <FormControl
          type="number"
          id="quantity"
          value={weight}
          onChange={handleChange}
        ></FormControl>
        <output>{productPrice.toFixed(2)} zł</output>
      </FormGroup>
      <Button
        variant="primary"
        onClick={() => handleAddToCarts({ name: "Banana", price, weight })}
      >
        Dodaj do koszyka!
      </Button>
    </Col>
  );
}
