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
        this.fileChange = this.fileChange.bind(this);
        this.state = {
            show: false,
            image: null,
        };

    }



    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit() {
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };

        let image_id = this.props.user.image_id;

        if(this.state.image != null) {
            const formDataImg = new FormData();
            formDataImg.append('image', this.state.image);
            axios.post('/api/uploadimg', formDataImg, config)
                .then((response) => {
                    if(response.status == 200) {
                        image_id = response.data.id
                        this.updateUser(image_id);
                    } else {
                        alert('Something went wrong with the image, ' + response.status + ': ' + response.statusText);
                    }
                }).catch((error) => {
                alert('Something went wrong with the image, ' + error);
            });
        } else {
            this.updateUser(image_id)
        }
    }

    updateUser(img_id) {
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };
        const formData = new FormData();
        formData.append('phone', phone.value);
        formData.append('email', email.value);
        formData.append('website', website.value);
        formData.append('twitter', twitter.value);
        formData.append('image_id', img_id);
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.user.id+'/edit/',formData,config)
            .then((response) => {
                if(response.status == 200) {
                    alert('User updated');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
            alert('Something went wrong, ' + error);
        });
        this.setState({ show: false });
    }

    fileChange(e) {
        this.setState({image: e.target.files[0]});
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
                                <Form.Control type="file" onChange={this.fileChange}/>
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