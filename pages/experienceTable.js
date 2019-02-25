import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class ExperienceTable extends React.Component {
  render () {
    return (
      <Card>
        <Card.Header>Experiences</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Worked for 200 years at company A</ListGroup.Item>
          <ListGroup.Item>Worked for 12 years at C</ListGroup.Item>
          <ListGroup.Item>Got fired from B</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}