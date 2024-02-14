import { useState } from "react";

function Favfood() {
  let foods = [
    "Idly",
    "Dosa",
    "Poori",
    "Chapathi",
    "Biriyani",
    "Chicken rice",
    "Naan",
  ];
  let [favFood, setFavFood] = useState([]);

  const addFavFood = (e) => {
    favFood.push(e.target.value);
    setFavFood([...favFood]);
    console.log(favFood);
  };

  return (
    <>
      <h1>List of Foods verities</h1>
      {foods.map((food) => (
        <div>
          <input
            type="checkbox"
            value={food}
            onChange={(e) => addFavFood(e)}
          ></input>
          {food}
        </div>
      ))}
      <h1>Favourite Food List</h1>
      {favFood.map((food) => {
        <p>{food}</p>;
      })}
    </>
  );
}

export default Favfood;
