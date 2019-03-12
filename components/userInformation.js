import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default class UserInformation extends React.Component {
  render() {
      if(this.props.about == null || this.props.user == null) {
        return (
            <Card>
                <Card.Header as="h5">Loading...</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Loading...
                    </Card.Text>
                </Card.Body>
            </Card>
        )
      } else {
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
}