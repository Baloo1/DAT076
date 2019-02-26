import {Navbar, Nav} from 'react-bootstrap';
import React from 'react';

export default class MainNavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>LinkedIn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="user">Userpage</Nav.Link>
          </Nav>
          <Nav.Link href="register">Register</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
