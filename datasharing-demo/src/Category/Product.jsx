import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.images[0]}
        style={{ width: "100%", height: "180px" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
