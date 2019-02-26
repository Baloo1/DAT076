import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default class UserContact extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" alt="Profile picture"/>
        <Card.Body>
          <Card.Title>Contact information</Card.Title>
          <Card.Text>
            <p>Phone nr:</p>
            <p>Email:</p>
            <p>etc:</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}