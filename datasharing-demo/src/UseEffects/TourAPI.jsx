import { useEffect, useState } from "react";
import TourCard from "./TourCard";

export default function TourAPI() {
  let [citys, setCitys] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const data = await response.json();
      console.log(data);
      setCitys(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [citys]);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {citys.length > 0
          ? citys.map((city) => <TourCard key={city.id} city={city} />)
          : "No data found"}
      </div>
    </>
  );
}
