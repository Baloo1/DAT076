import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default class Experience extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text> {this.props.from} – {this.props.to} </Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}