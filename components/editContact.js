import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {CopyToClipboard} from "react-copy-to-clipboard";



export default class EditContact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            copied: false,
        };
    }

    render() {
        // Destructuring of props for cleaner syntax
        const {
            name,
            phone,
            email,
            website,
            twitter
        } = this.props.user;
        const {
            handleShow,
            handleClose,
            handleSubmit,
            fileChange,
            show
        } = this.props;

        return (
            <React.Fragment>
                <Button variant="primary" onClick={handleShow}>
                        Edit
                </Button>
                <CopyToClipboard text={'localhost:3000/viewuser?id='+this.props.user.id}
                                 onCopy={()=>this.setState({copied: true})}>
                    <Button variant="secondary">{this.state.copied ? 'Copied' : 'Get Link'}</Button>
                </CopyToClipboard>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit contact details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={name}/>
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" defaultValue={phone}/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" defaultValue={email}/>
                            </Form.Group>
                            <Form.Group controlId="website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" defaultValue={website}/>
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="text" defaultValue={twitter}/>
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={fileChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                                Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

EditContact.propTypes = {
    user: PropTypes.object,
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func,
    fileChange: PropTypes.func
};
