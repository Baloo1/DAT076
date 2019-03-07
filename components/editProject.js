import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Upload from "./upload";
const axios =require('axios');

export default class EditProject extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            show: false,
            add: false,
            component: <React.Fragment/>,
            submitFunction: this.handleSubmit
        };
    }



    handleClose() {
        this.setState({ show: false });
    }

    handleShowAdd() {
            this.setState({component: <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Upload/>
                    </Form.Group>

                </Form>, submitFunction: this.handleSubmitAdd,show: true, add: true})
    }

    handleShow() {
            this.setState({component: <Form>
                        <Form.Label>Title</Form.Label>
                        <Form.Control inputRef={input=>this.title = input} type="text" />
                        <Form.Label>Description</Form.Label>
                        <Form.Control inputRef={input=>this.description = input} type="text" as="textarea" rows="3" />
                        <Form.Label>Image</Form.Label>
                        <Upload/>

                </Form>, submitFunction: this.handleShowAdd(),show: true, add: false})


    }

    handleSubmit() {
        this.setState({ show: false });
    }

    handleSubmitAdd() {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('user_id', this.props.id);
        formData.append('id', this.props.id);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('http://127.0.0.1/api/user/'+this.props.id+'/project/new',formData,config)
            .then((response) => {
                alert(response)
                if(response.status === 200) {
                    alert("Project added");
                } else {
                    alert("Something went wrong, " + response.status + ": " + response.statusText);
                }
            }).catch((error) => {
            alert("Something went wrong, " + error);
        });
        this.setState({ show: false });
    }

    handleAdd() {

    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={this.handleShowAdd}>
                    Add
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.component}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.state.submitFunction}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}