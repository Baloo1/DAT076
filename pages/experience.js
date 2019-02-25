import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default class Experience extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header as="h5">Project name</Card.Header>
        <Card.Img variant="left" src="holder.js/100px180" alt="Picture"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}