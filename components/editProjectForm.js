import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default class EditProjectForm extends React.Component {
    render() {
        const {
            projects,
            selectProject,
            selectedProject,
            handleProjectChange,
            modifyDate,
            fileChange
        } = this.props;

        return (
            <React.Fragment>
                <DropdownButton id="dropdown-item-button" title="Select project">
                    {projects.map((project,index) => (
                        <Dropdown.Item key={index} as="button" onClick={() => selectProject(project)}>{project.title}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name={'title'}
                            type="text"
                            value={selectedProject.title}
                            onChange={handleProjectChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name={'description'}
                            type="text"
                            as="textarea"
                            rows="3"
                            value={selectedProject.description}
                            onChange={handleProjectChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="start_date">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control
                            name={'start_date'}
                            type="date"
                            value={modifyDate(selectedProject.start_date)}
                            onChange={handleProjectChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="end_date">
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                            type="date"
                            name={'end_date'}
                            value={modifyDate(selectedProject.end_date)}
                            onChange={handleProjectChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={fileChange}/>
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}

EditProjectForm.propTypes = {
    projects: PropTypes.array,
    selectedProject: PropTypes.object,
    selectProject: PropTypes.func,
    handleProjectChange: PropTypes.func,
    modifyDate: PropTypes.func,
    fileChange: PropTypes.func
};

