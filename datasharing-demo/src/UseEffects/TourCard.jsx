import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TourCard({ city, remove }) {
  const handleClick = () => {
    remove(city.id);
  };
  return (
    <>
      <Card style={{ width: "18rem", height: "auto" }}>
        <Card.Img variant="top" src={city.image} style={{ height: "12rem" }} />
        <Card.Body>
          <Card.Title>{city.name}</Card.Title>
          <Card.Text>{city.info}</Card.Text>
          <Button
            variant="primary"
            onClick={handleClick}
            style={{
              position: "absolute",
              bottom: "10px",
              marginTop: "20px",
              left: "20px",
            }}
          >
            Not Interested
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
