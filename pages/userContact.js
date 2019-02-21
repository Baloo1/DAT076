import React from 'react'
import {Button, Card} from "react-bootstrap";

export default class UserContact extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Header as="h5">Project name</Card.Header>
                <Card.Img variant="top" src="holder.js/100px180" alt="Profile picture"/>
                <Card.Body>
                    <Card.Title>Contact information</Card.Title>
                    <Card.Text>
                        Phone nr:
                        Email:
                        etc:
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}