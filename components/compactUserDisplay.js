import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import EditAbout from "./editAbout";
import Link from "./userContact";

export default class CompactUserDisplay extends React.Component {
    render() {
        const {
            user
        } = this.props;

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"/api/display/" + user.image_id} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        Id: {user.id} <br/>
                        Phone nr: {user.phone}<br/>
                        Email: {user.email}<br/>
                        Website: {user.website} <br/>
                        Twitter: {user.twitter}
                    </Card.Text>
                    <Button variant="primary" href={"/viewuser?id=" + user.id}>View user profile</Button>
                </Card.Body>
            </Card>
        )
    }
}

CompactUserDisplay.propTypes = {
    user: PropTypes.object
};