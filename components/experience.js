import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Experience extends React.Component {
    render() {
        // Destructuring of props for cleaner syntax
        const {
            experience,
            start_date,
            end_date
        } = this.props;

        return(
            <Card>
                <Card.Body>
                    <Card.Title>{experience.title}</Card.Title>
                    <Card.Text> {start_date} – {end_date} </Card.Text>
                    <Card.Text>{experience.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

Experience.propTypes = {
    experience: PropTypes.object,
    start_date: PropTypes.string,
    end_date: PropTypes.string
};


