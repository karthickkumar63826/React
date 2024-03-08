import { useState } from "react";

export default function Search({ handleSearch }) {
  let [info, setInfo] = useState();

  const handleChange = (e) => {
    setInfo(e.target.value);
    handleSearch(info);
  };

  return (
    <>
      search :{" "}
      <input
        type="text"
        placeholder="Search Box"
        value={info}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
