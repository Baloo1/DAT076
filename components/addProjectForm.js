import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import EditProjectForm from "./editProjectForm";


export default class AddProjectForm extends React.Component {
    render() {
        const {
            selectedProject,
            fileChange
        } = this.props;

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
                <Form.Group controlId="start_date">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group controlId="end_date">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={fileChange}/>
                </Form.Group>
            </Form>
        );
    }}

EditProjectForm.propTypes = {
    selectedProject: PropTypes.object,
    fileChange: PropTypes.func
};

