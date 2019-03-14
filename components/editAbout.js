import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddAboutForm from "./addAboutForm";
import EditAboutForm from "./editAboutForm";



export default class EditAbout extends React.Component {
    render() {
        // Destructuring of props for cleaner syntax
        const {
            handleClose,
            handleShow,
            handleShowAdd,
            isAdding,
            isDisabled,
            abouts,
            selectedAbout,
            selectAbout,
            isShowing,
            submitFunction,
            handleAboutChange,
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
                        <Modal.Title>About</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {isAdding ?
                            <AddAboutForm /> :
                            <EditAboutForm
                                abouts={abouts}
                                selectedAbout={selectedAbout}
                                selectAbout={selectAbout}
                                handleAboutChange={handleAboutChange}
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

EditAbout.propTypes = {
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
    handleShowAdd: PropTypes.func,
    isAdding: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isShowing: PropTypes.bool,
    abouts: PropTypes.array,
    selectedAbout: PropTypes.object,
    selectAbout: PropTypes.func,
    submitFunction: PropTypes.func,
    handleAboutChange: PropTypes.func
};
