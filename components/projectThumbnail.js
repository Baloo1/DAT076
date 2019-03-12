import React from 'react';
import {Card} from 'react-bootstrap';

export default class ProjectThumbnail extends React.Component {
    constructor(props) {
        super(props);

        let modded_end_date = this.props.project.end_date;
        let modded_start_date = this.props.project.start_date;
        if(modded_end_date == null) {
            modded_end_date = 'present';
        } else {
            modded_end_date = modded_end_date.substring(0, 10);
        }
        if(modded_start_date == null) {
            modded_start_date = 'unknows';
        } else {
            modded_start_date = modded_start_date.substring(0, 10);
        }

        this.state = {
            projectLength: 0,
            img: '/api/display/', //this.props.project.image_id,
            start_date: modded_start_date,
            end_date: modded_end_date
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
