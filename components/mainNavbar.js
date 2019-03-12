import {Navbar, Nav} from 'react-bootstrap';
import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const axios =require('axios');

export default class MainNavBar extends React.Component {
    constructor(props, context) {
        super(props);

        this.handleShowRegister = this.handleShowRegister.bind(this);
        this.handleCloseRegister = this.handleCloseRegister.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            showLogin: false,
            showRegister: false,
            isLoggedIn: false,
            user: null
        };
    }

    async componentDidMount() {
        if(window.sessionStorage.getItem('user') != null) {
            await this.setState({isLoggedIn: true})
            this.setState({user: window.sessionStorage.getItem('user')})
        }
    }

    handleCloseRegister() {
        this.setState({showRegister: false});
    }

    handleShowRegister() {
        this.setState({showRegister: true});
    }

    handleLogout() {
        this.setState({isLoggedIn: false});
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        window.location = '/'
    }

    handleRegister() {
        const formData = new FormData();
        formData.append('email', registerEmail.value);
        formData.append('password', registerPassword.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/register',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert("Registration successful, please login")
                    this.setState({showRegister: false})
                } else {
                    alert("Something went wrong, " + response.status + ": " + response.statusText);
                }
            }).catch((error) => {
            alert("Something went wrong, " + error.response.data);
        });
    }

    handleCloseLogin() {
        this.setState({showLogin: false});
    }

    handleShowLogin() {
        this.setState({showLogin: true});
    }

    handleLogin() {
        const formData = new FormData();
        formData.append('email', loginEmail.value);
        formData.append('password', loginPassword.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/login',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    sessionStorage.setItem('user', response.data.user);
                    sessionStorage.setItem('jwtToken', response.data.token);
                    this.setState({isLoggedIn: true, showLogin: false, user: response.data.user});
                } else {
                    alert("Something went wrong, " + response.status + ": " + response.statusText);
                }
            }).catch((error) => {
            alert("Something went wrong, " + error.response.data);
        });
    }

    render() {

        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>LinkedIn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        { !this.state.isLoggedIn ? (
                            <div>
                                <Button onClick={this.handleShowRegister}>Register</Button>
                                <Button onClick={this.handleShowLogin}>Login</Button>
                            </div>
                            ) : (
                            <div>
                                <Nav className="mr-auto">
                                    <Nav.Link href={"user?id=" + this.state.user}>My Page</Nav.Link>
                                </Nav>
                                <Nav className="mr-auto">
                                    <Nav.Link href={"edit?id=" + this.state.user}>Edit My Page</Nav.Link>
                                </Nav>
                                <Button onClick={this.handleLogout}>Logout</Button>
                            </div>
                            )
                        }
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={this.state.showLogin} onHide={this.handleCloseLogin}>
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
                        <Button variant="secondary" onClick={this.handleCloseLogin}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.showRegister} onHide={this.handleCloseRegister}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register a new User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="registerEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="registerPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseRegister}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleRegister}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
                    );
                    }
                    }
