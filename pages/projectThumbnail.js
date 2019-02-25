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
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    );
  }
}