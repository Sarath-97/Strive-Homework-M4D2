import {useState}  from react
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = () =>{
  const [selected, setSelected] = useState(false)
    return (
        <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Title>Book id:{this.props.asin}</Card.Title>
          <Button
            variant="primary"
            onClick={() =>
              setSelected({ selected: !this, state, seleted: True })
            }
          >
            Comments
          </Button>
        </Card.Body>
      </Card>
      {
          selected && <CommentArea />
      }
      </Container>
    );
    
}

export default SingleBook