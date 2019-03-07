import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default class UserInformation extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header as="h5">{this.props.user.name}</Card.Header>
        <Card.Body>
          <Card.Text>
              {this.props.about.description}
          </Card.Text>
          <Button variant="primary">Go to timeline</Button>
        </Card.Body>
      </Card>
    );
  }
}