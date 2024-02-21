import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductCard from "./Product";

export default function FetchProduct() {
  let [products, setProducts] = useState([]);
  let [j, setJSON] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
      setJSON(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {j}
        {products.length > 0
          ? products.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))
          : "No product found"}
      </div>
    </>
  );
}
