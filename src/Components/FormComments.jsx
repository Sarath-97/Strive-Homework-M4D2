import { Component } from "react";
import { Container, Form } from "react-bootstrap";

class FormComments extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Book</Form.Label>
            <Form.Control type="Text" placeholder="Name of book" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FormComments;
