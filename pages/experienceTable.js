import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Experience from "./experience";

export default class ExperienceTable extends React.Component {
  render () {
    return (
      <Card>
        <Card.Header as="h5">Experiences</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><Experience title={"Work nr1"} from={"2018-01-01"} to={"2019-01-01"} description={"This was a very good job!"}/></ListGroup.Item>
          <ListGroup.Item><Experience title={"Work nr2"} from={"2018-01-01"} to={"Currently"} description={"This was a very good job! Even better than the last one"}/></ListGroup.Item>
          <ListGroup.Item>Got fired from B</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}