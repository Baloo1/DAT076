import React from 'react';
import { Card } from 'react-bootstrap';


export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        let end_date;
        if (!(this.props.experience.end_date===null)) {
            end_date = this.props.experience.end_date.substring(0, 10);
        } else {
            end_date = 'present';
        }

        this.state = {
            start_date: this.props.experience.start_date.substring(0, 10),
            end_date: end_date,
        };

    }
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.experience.title}</Card.Title>
                    <Card.Text> {this.state.start_date} – {this.state.end_date} </Card.Text>
                    <Card.Text>{this.props.experience.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
