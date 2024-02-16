import { useState } from "react";

function Favfood() {
  let [favfood, setfavfood] = useState([]);
  const favitems = ["sambhar", "dosai", "idly", "puttu"];
  const addfavfood = (e) => {
    // console.log(favfood)
    // console.log(e.target.value)
    // favfood.push(e.target.value);
    // console.log(favfood)
    // setfavfood([...favfood]);
    if (e.target.checked) {
      favfood.push(e.target.value);
    } else {
      favfood = favfood.filter((ff) => ff != e.target.value);
      console.log(favfood);
    }
    setfavfood([...favfood]);
  };

  return (
    <>
      <div>
        {favitems.map((f) => (
          <div>
            <input type="checkbox" value={f} onClick={(e) => addfavfood(e)} />
            {f}
          </div>
        ))}
        <b> your favorite items </b>
        {/* {JSON.stringify(favfood)} */}
        {favfood.length > 0
          ? favfood.map((f) => <div> {f}</div>)
          : "not selected any items "}
      </div>
    </>
  );
}

export default Favfood;
