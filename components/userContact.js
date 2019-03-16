import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';




export default class UserContact extends React.Component {
    render() {
        if (this.props.user == null) {
            return (
                <Card>
                    <Card.Img variant="top" src="/api/display/0" alt="Profile picture"/>
                    <Card.Header>Loading... </Card.Header>
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
                    <Card.Header>{this.props.user.name ? this.props.user.name : "Your name here"}</Card.Header>
                    <Card.Body>
                        <Card.Title>Contact information</Card.Title>
                        <Card.Text>
                            Phone nr: {this.props.user.phone}<br/>
                            Email: {this.props.user.email}<br/>
                            Website: <Link href={'https://' + this.props.user.website}><a>{this.props.user.website}</a></Link>
                            <br/>
                            Twitter: {this.props.user ? "" :<Link href={'https://twitter.com/' + this.props.user.twitter.substring(1)}><a>{this.props.user.twitter}</a></Link>}
                            <br/>
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
