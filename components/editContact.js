import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const axios =require('axios');

export default class EditContact extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            show: false,
        };

    }



    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('phone', phone.value);
        formData.append('email', email.value);
        formData.append('website', website.value);
        formData.append('twitter', twitter.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.user.id+'/edit/',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('User updated');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
            alert('Something went wrong, ' + error);
        });
        this.setState({ show: false });
    }



    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Edit
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit contact details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.user.phone}/>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.user.email}/>
                            </Form.Group>
                            <Form.Group controlId="website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.user.website}/>
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.user.twitter}/>
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image</Form.Label>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}