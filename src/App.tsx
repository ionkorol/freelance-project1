import React from "react";
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Where do you want to live?</Form.Label>
          <Form.Select>
            <option>Queens</option>
            <option>Manhattan</option>
            <option>Brooklyn</option>
            <option>Staten Island</option>
            <option>Bronx</option>
          </Form.Select>
        </Form.Group>
        <img src="/brooklyn.jpg" width={500} height={500} alt="" />
        <Form.Group>
          <Form.Label>What is your current address?</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>What is your budget?</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>What amenities are you interested in?</Form.Label>
          <Form.Select>
            <option>Test Amenite</option>
          </Form.Select>
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
