import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditProjectForm from './editProjectForm';
import AddProjectForm from './addProjectForm';


export default class EditProject extends React.Component {
    render() {
        // Destructuring of props for cleaner syntax
        const {
            handleClose,
            handleShow,
            handleShowAdd,
            isAdding,
            isDisabled,
            projects,
            selectedProject,
            selectProject,
            isShowing,
            submitFunction,
            handleProjectChange,
            modifyDate,
            fileChange
        } = this.props;
        return (
            <React.Fragment>
                <Button variant="primary" onClick={handleShow} disabled={isDisabled}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={handleShowAdd}>
                    Add
                </Button>
                <Modal show={isShowing} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {isAdding ?
                            <AddProjectForm
                                selectedProject={{title: "", description: "", start_date: null, end_date: null, image_id: 0}}
                                fileChange={fileChange}
                            /> :
                            <EditProjectForm
                                projects={projects}
                                selectedProject={selectedProject}
                                selectProject={selectProject}
                                handleProjectChange={handleProjectChange}
                                modifyDate={modifyDate}
                                fileChange={fileChange}
                            />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={submitFunction}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

EditProject.propTypes = {
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
    handleShowAdd: PropTypes.func,
    isAdding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isShowing: PropTypes.bool,
    projects: PropTypes.array,
    selectedProject: PropTypes.object,
    selectProject: PropTypes.func,
    submitFunction: PropTypes.func,
    handleProjectChange: PropTypes.func,
    modifyDate: PropTypes.func,
    fileChange: PropTypes.func
};
