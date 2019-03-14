
import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default class MainNavBar extends React.Component {
    render() {
        const {
            isLoggedIn,
            handleShowRegister,
            handleShowLogin,
            handleLogout,
            user
        } = this.props;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">LinkedIn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    { isLoggedIn ? (
                          <>
                              <Nav className="mr-auto">
                                  <Nav.Link href={'user?id=' + user}>My Page</Nav.Link>
                                  <Nav.Link href={'edit?id=' + user}>Edit My Page</Nav.Link>
                              </Nav>
                              <Button onClick={handleLogout}>Logout</Button>
                          </>
                    ) : (
                          <>
                              <Nav className="mr-auto">
                                  <Navbar.Text>Log in to see more!</Navbar.Text>
                              </Nav>

                              <Button onClick={handleShowRegister}>Register</Button>
                              <Button onClick={handleShowLogin}>Login</Button>
                          </>
                    )
                    }
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

MainNavBar.propTypes = {
    isLoggedIn: PropTypes.bool,
    handleShowRegister: PropTypes.func,
    handleShowLogin: PropTypes.func,
    handleLogout: PropTypes.func,
    user: PropTypes.any
};
