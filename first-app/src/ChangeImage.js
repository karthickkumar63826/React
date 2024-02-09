function ChangeImage() {
  const change = (event) => {
    console.log(event.target.src);
    if (event.target.src == "http://localhost:3000/images/img1.jpg")
      event.target.src = "http://localhost:3000/images/img2.jpg";
    else event.target.src = "http://localhost:3000/images/img1.jpg";
  };

  return (
    <>
      <img
        src="./images/img1.jpg"
        alt="image"
        height="400px"
        width="400px"
        onClick={(event) => change(event)}
      ></img>
    </>
  );
}

export default ChangeImage;
