import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default class UserContact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user == null) {
            return (
                <Card>
                    <Card.Img variant="top" src="/api/display/0" alt="Profile picture"/>
                    <Card.Body>
                        <Card.Title>Contact information</Card.Title>
                        <Card.Text>
                            Phone nr: Loading... {'\n'}
                            Email: Loading... {'\n'}
                            Website: Loading... {'\n'}
                            Twitter: Loading... {'\n'}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        } else {
            return (
                <Card>
                    <Card.Img variant="top" src={'/api/display/' + this.props.user.image_id} alt="Profile picture"/>
                    <Card.Body>
                        <Card.Title>Contact information</Card.Title>
                        <Card.Text>
                            Phone nr: {this.props.user.phone}<br/>
                            Email: {this.props.user.email}<br/>
                            Website: {this.props.user.website}<br/>
                            Twitter: {this.props.user.twitter}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        }
    }
}

UserContact.propTypes = {
    user: PropTypes.object
};
