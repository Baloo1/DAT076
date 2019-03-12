import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default class EditProjectForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <DropdownButton id="dropdown-item-button" title="Select project">
                    {this.props.projects.map((project,index) => (
                        <Dropdown.Item key={index} as="button" onClick={() => this.props.selectProject(project)}>{project.title}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.props.selectedProject.title}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" as="textarea" rows="3" value={this.props.selectedProject.description}/>
                    </Form.Group>
                    <Form.Group controlId="start_date">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control type="date" value={this.props.selectedProject.start_date}/>
                    </Form.Group>
                    <Form.Group controlId="end_date">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" value={this.props.selectedProject.end_date}/>
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}

EditProjectForm.propTypes = {
    projects: PropTypes.array,
    selectedProject: PropTypes.object,
    selectProject: PropTypes.func
};

