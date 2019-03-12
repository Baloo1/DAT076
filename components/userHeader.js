import {Navbar, Nav} from 'react-bootstrap';
import React from 'react';

export default class UserHeader extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="../">LinkedIn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/user">Your page</Nav.Link>
                        <Nav.Link href="/edit">Edit</Nav.Link>
                    </Nav>
                    <Nav.Link href="logout">Logout</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
