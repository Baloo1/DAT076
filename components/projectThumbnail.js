import React from 'react';
import {Card} from 'react-bootstrap';

export default class ProjectThumbnail extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      projectLength: 0,
      img: '/api/images/' + this.props.img,

    };

  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.state.img} alt="Picture"/>
        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{this.props.project.title}</Card.Title>
            <Card.Text>
              {this.props.project.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    );
  }
}