import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddExperienceForm from './addExperienceForm';
import EditExperienceForm from './editExperienceForm';



export default class EditExperience extends React.Component {
    render() {
        // Destructuring of props for cleaner syntax
        const {
            handleClose,
            handleShow,
            handleShowAdd,
            isAdding,
            isDisabled,
            experiences,
            selectedExperience,
            selectExperience,
            isShowing,
            submitFunction,
            handleExperienceChange,
            modifyDate
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
                        <Modal.Title>Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {isAdding ?
                            <AddExperienceForm /> :
                            <EditExperienceForm
                                experiences={experiences}
                                selectedExperience={selectedExperience}
                                selectExperience={selectExperience}
                                handleExperienceChange={handleExperienceChange}
                                modifyDate={modifyDate}
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

EditExperience.propTypes = {
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
    handleShowAdd: PropTypes.func,
    isAdding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isShowing: PropTypes.bool,
    experiences: PropTypes.array,
    selectedExperience: PropTypes.object,
    selectExperience: PropTypes.func,
    submitFunction: PropTypes.func,
    handleExperienceChange: PropTypes.func,
    modifyDate: PropTypes.func
};
