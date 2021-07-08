import books from "../Data/scifi.json";
import { Card, Col, Row, Button } from "react-bootstrap";

const LatestReleases = () => {
  return (
    
      <Row xs={12} md={6}>
        {
        
        books.map(book => (
          <Col >
            <Card style={{ width: "10rem" }} className = "ml-3">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="CardBody d-flex">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.Category}</Card.Text>
              </Card.Body>
              <Button variant="secondary" className="button">
                {" "}
                Buy $ {book.price}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    
  );
};

export default LatestReleases;
