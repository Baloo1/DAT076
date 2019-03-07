import React from 'react';
import {Card} from 'react-bootstrap';

export default class ProjectThumbnail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projectLength: 0,
      img: '/api/display/', //this.props.project.image_id,
      start_date: this.props.project.start_date.substring(0, 10),
      end_date: this.props.project.end_date.substring(0, 10)
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
            <Card.Text> {this.state.start_date} – {this.state.end_date} </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    );
  }
}