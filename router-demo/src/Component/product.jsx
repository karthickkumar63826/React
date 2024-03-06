import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product() {
  let [product, setProduct] = useState();
  const { productid } = useParams();

  const getProduct = async (productid) => {
    try {
      let response = await fetch(`https://dummyjson.com/products/${productid}`);
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(productid);
  }, []);

  return (
    <>
      {product ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.images[2]} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link to="/products">
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <h1>loading....</h1>
      )}
    </>
  );
}
