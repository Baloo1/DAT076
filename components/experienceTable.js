import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Experience from './experience';
import ProjectThumbnail from "./projects";

export default class ExperienceTable extends React.Component {
  render () {
      const experiences = [];
      for (var i = 0; i < this.props.experiences.length; i += 1) {
          experiences.push(<Experience experience={this.props.experiences[i]}/>);
      }
    return (
      <Card>
        <Card.Header as="h5">Experiences</Card.Header>
        <ListGroup variant="flush">
            {experiences}
        </ListGroup>
      </Card>
    );
  }
}