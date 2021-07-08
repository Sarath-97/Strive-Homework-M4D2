import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
        <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Title>Book id:{this.props.asin}</Card.Title>
          <Button
            variant="primary"
            onClick={() =>
              this.setState({ selected: !this, state, seleted: True })
            }
          >
            Comments
          </Button>
        </Card.Body>
      </Card>
      {
          this.state.selected && <CommentArea />
      }
      </>
    );
  }
}

export default SingleBook