import React from 'react';
import Form from 'react-bootstrap/Form';


export default class AddAboutForm extends React.Component {
    render() {
        return(
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" rows="3" />
                </Form.Group>
            </Form>
        );
    }}
