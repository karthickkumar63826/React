import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { removeFromCart } from "./cartreducers";
import { useState, useEffect } from "react";

export default function Cart() {
  let cart = useSelector((state) => state.cartApi.cart);
  let dispatch = useDispatch();
  let [totalPrice, setTotalPrice] = useState(0);
  function calculateTotalprice() {
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
      totalAmount += cart[i].product.price;
    }
    setTotalPrice(totalAmount);
  }
  useEffect(() => {
    calculateTotalprice();
  });
  return (
    <>
      <b>TotalPrice</b>
      {totalPrice > 0 ? totalPrice : ""}
      {/* {JSON.stringify(cart)} */}
      {cart.length > 0
        ? cart.map((c) => (
            <Container className="d-flex justify-content-center align-content-center">
              <Card className="text-center" style={{ width: "30rem" }}>
                <Card.Header>CartItem</Card.Header>
                <Card.Body>
                  <Card.Title>{c.product.title}</Card.Title>
                  <Card.Text>
                    <img
                      src={c.product.image}
                      height="120px"
                      width="140px"
                    ></img>
                    <br></br>
                    {c.product.description}
                    <br></br>

                    <b>PRICE:{c.product.price}</b>
                  </Card.Text>
                  <Button variant="primary">BUY NOW</Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(c.cartId))}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          ))
        : "No Items in the cart"}
    </>
  );
}
