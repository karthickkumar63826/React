import { useRef, useEffect } from "react";

export default function UseRefDemo() {
  let btnRef = useRef();

  useEffect(() => {
    console.log(btnRef.current);
  }, []);

  function handleMouseOver() {
    btnRef.current.style.borderColor = "Red";
    btnRef.current.style.transform = "scale(1.1)";
  }

  function handleMouseLeave() {
    btnRef.current.style.borderColor = "black";
    btnRef.current.style.transform = "scale(1)";
  }
  return (
    <>
      <button
        ref={btnRef}
        onMouseOver={() => handleMouseOver()}
        onMouseLeave={() => handleMouseLeave()}
      >
        Hover Me
      </button>
    </>
  );
}
