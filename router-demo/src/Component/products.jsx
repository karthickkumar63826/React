import { useEffect, useState } from "react";
import ProductCard from "./productCard";

export default function Products() {
  let [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}
