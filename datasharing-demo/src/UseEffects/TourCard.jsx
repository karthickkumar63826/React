import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TourCard({ city }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={city.image} />
        <Card.Body>
          <Card.Title>{city.name}</Card.Title>
          <Card.Text>{city.info}</Card.Text>
          <Button variant="primary">Not Interested</Button>
        </Card.Body>
      </Card>
    </>
  );
}
