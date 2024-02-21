import { useRef, useState } from "react";

export default function UseRefDemo4() {
  let imgRef = useRef();
  let paraRef = useRef();

  let [count, setCount] = useState(0);

  function handleImage() {
    imgRef.current.width = imgRef.current.width + 100;
    imgRef.current.height = imgRef.current.height + 100;
    count++;

    if (count > 5) {
      imgRef.current.width = imgRef.current.width - 100;
      imgRef.current.height = imgRef.current.height - 100;
    }
  }

  function handlePara() {
    paraRef.current.style.color = "Red";
    paraRef.current.style.fontSize = "30px";
  }
  return (
    <>
      <img
        src="./images/img1.jpg"
        alt=""
        ref={imgRef}
        width="140px"
        height="140px"
        onClick={() => handleImage()}
      />
      <p ref={paraRef} onClick={() => handlePara()}>
        Welcome to our youtube channel
      </p>
    </>
  );
}
