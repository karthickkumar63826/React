import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartreducers";

function Product() {
  const { productid } = useParams();
  let [product, setProduct] = useState();
  let dispatch = useDispatch();
  const getProduct = async (productid) => {
    try {
      const response = await fetch(
        ` https:fakestoreapi.com/products/${productid}`
      ); //(https://fakestoreapi.com/users/${dataid})
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct(productid);
  });
  return (
    <>
      {/* <b>{JSON.stringify(data)}</b> */}
      {product ? (
        <>
          <b>{product.title}</b>
          <br></br>

          <img
            src={product.image}
            alt="image"
            height="250px"
            width="230px"
          ></img>
          <br></br>
          <b>{product.price}</b>
          <br></br>
          <b>{product.description}</b>
          <br></br>
          <b>{product.category}</b>
        </>
      ) : (
        "...Loading"
      )}
      <br></br>
      <Link to="/products">
        <button>Go Back</button>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </>
  );
}
export default Product;
