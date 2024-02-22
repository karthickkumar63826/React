import { useEffect, useRef, useState } from "react";

export default function UseRefDemo4() {
  let imgRef = useRef();
  let paraRef = useRef();

  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(imgRef.current.width + ","+ imgRef.current.height);
  }, [count])

  function handleImage() {
    imgRef.current.width = imgRef.current.width + 100;
    imgRef.current.height = imgRef.current.height + 100;
    count = count + 1;
    setCount(count);

    if (count > 5) {
      decreaseSize();
    }
  }

  function decreaseSize() {
    imgRef.current.width = imgRef.current.width - 100;
    imgRef.current.height = imgRef.current.height - 100;
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
