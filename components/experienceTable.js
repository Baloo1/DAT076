import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Experience from './experience';


export default class ExperienceTable extends React.Component {
    render () {
        if(this.props.experiences == null) {
            return (
                <Card>
                    <Card.Header as="h5">Experiences</Card.Header>
                </Card>
            );
        } else {
            const experiences = [];
            for (let i = 0; i < this.props.experiences.length; i += 1) {
                experiences.push(
                    <Experience key={i} experience={this.props.experiences[i]}/>
                );
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
}
