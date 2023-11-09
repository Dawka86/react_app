import { Accordion, Badge, ListGroup, Button } from "react-bootstrap";
import "./cart.css";

export function CardData({ cart, onRemoveProduct, totalPrice }) {
  let cartLength = cart.length;

  const handleRemoveProduct = (index) => {
    onRemoveProduct(index);
  };

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Lista zamówionych produktów{" "}
            <Badge bg="info" style={{ marginLeft: "3px" }}>
              {" "}
              {cartLength}
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup as="ol" numbered>
              {cart.map((product, index) => (
                <ListGroup.Item as="li" key={index}>
                  {product.name} - {product.weight} kg -{" "}
                  {((product.weight * product.price).toFixed(2))} zł
                  <Button className="deleteButton"
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Usuń
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <p className="result-paragraph">Suma: {totalPrice} zl</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
