
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class LoginBox extends React.Component {
    render() {
        const {
            showLogin,
            handleCloseLogin,
            handleLogin
        } = this.props;
        return (
            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>
                      Login
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

LoginBox.propTypes = {
    showLogin: PropTypes.bool,
    handleCloseLogin: PropTypes.func,
    handleLogin: PropTypes.func,
};
