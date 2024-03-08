import { useEffect, useState } from "react";
import Product from "./Product";
import Search from "./Search";

export default function Products({ categorized }) {
  let [products, setProducts] = useState([]);
  let [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data.products);
      setProducts(data.products);
      setDisplayProducts(data.products);
    } catch (error) {
      console.group(error);
    }
  };

  const handleCategory = (categorized) => {
    console.log(categorized);
    // getItem();
    const filteredProducts = products.filter((product) =>
      product.category.includes(categorized)
    );
    console.log(filteredProducts);
    setDisplayProducts(filteredProducts);
  };

  const handleSearch = (searchTerm) => {
    const searchedItem = products.filter(
      (product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayProducts(searchedItem);
  };

  useEffect(() => {
    handleCategory(categorized);
  }, [categorized]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: " 40px",
        }}
      >
        <Search handleSearch={handleSearch} />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {displayProducts.length > 0 ? (
          displayProducts.map((p) => <Product key={p.id} product={p}></Product>)
        ) : (
          <h1> No items found </h1>
        )}
      </div>
    </>
  );
}
