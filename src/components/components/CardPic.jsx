import React, { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  Card,
  Modal,
} from "react-bootstrap";
import "./cart.css";

export default function CartPic({ price, onAddToCart, cart, pic, name, height }) {
  const [weight, setWeight] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  const productPrice = price * weight;

  function handleChange(e) {
    const newValue = e.target.value;
    if (newValue >= 0) {
      setWeight(newValue);
    } else {
      alert("Waga owoców nie może być mniejsza od 0kg");
    }
  }

  const handleAddToCart = () => {
    const product = { name, price, weight };
    onAddToCart([...cart, product]);
    handleShowInfo();
  };

  return (
    <Col style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }} xs={12} md={3}>
      <Image
        className="image-class"
        src={pic}
        thumbnail
        alt={name}
        style={{ height: height, width: "300px", padding: "10px", marginTop: "5px" }}
      />
      <FormGroup>
        <Card.Title className="title-card">{name}</Card.Title>
        <FormLabel>Waga zamówienia:</FormLabel>
        <p>Cena: {price} zł za kg.</p>
        <FormControl
          type="number"
          id="quantity"
          value={weight}
          onChange={handleChange}
        />
        <output>{productPrice.toFixed(2)} zł</output>
      </FormGroup>
      <Button className="buttonAddToCart" variant="primary" onClick={handleAddToCart}>
        Dodaj do koszyka
      </Button>

      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Informacja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Twoje zamówienie zostało dodane do koszyka.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}
