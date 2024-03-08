import { useEffect, useState } from "react";
import Products from "./Products";
import Search from "./Search";

export default function Category() {
  let [categories, setCategories] = useState([]);
  let [filtered, setFiltered] = useState("");

  const getCategory = async () => {
    let response = await fetch(
      "https://dummyjson.com/products/categories?limit=0"
    );
    let data = await response.json();
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCategory = (category) => {
    console.log(category);
    setFiltered(category);
  };

  return (
    <>
      <div className="Categories">
        {/* <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li key={index}>
                <button onClick={() => handleCategory(category)}>
                  {" "}
                  {category}
                </button>
              </li>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </ul> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: " 40px",
          }}
        >
          <b>Select Category</b>
          <select onChange={(e) => handleCategory(e.target.value)}>
            <option value="">select category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <Products categorized={filtered}></Products>
      </div>
    </>
  );
}
