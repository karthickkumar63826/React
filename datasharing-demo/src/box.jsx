function Box(props) {
  let boxStyle = {
    backgroundColor: props.color,
    padding: "20px",
    margin: "10px",
    color: "#fff",
    textAlign: "center",
    borderRadius: "25px",
  };

  return (
    <>
      <div style={boxStyle}>{props.text}</div>
    </>
  );
}

export default Box;
