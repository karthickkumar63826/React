import { useEffect, useState } from "react";
import TourCard from "./TourCard";

export default function TourAPI() {
  let [cities, setcities] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const data = await response.json();
      console.log(data);
      setcities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cities]);

  const removeSelected = (id) => {
    const filteredCities = cities.filter((city) => city.id !== id);
    setcities(filteredCities);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {cities.length > 0
          ? cities.map((city) => (
              <TourCard key={city.id} city={city} remove={removeSelected} />
            ))
          : "No data found"}
      </div>
    </>
  );
}
