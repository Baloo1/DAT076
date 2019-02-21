import React from 'react'
import {Button, Card} from "react-bootstrap";

export default class UserInformation extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Header as="h5">Your name</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Here you can say interesting things about yourself!
                    </Card.Text>
                    <Button variant="primary">Go to timeline</Button>
                </Card.Body>
            </Card>
        );
    }
}