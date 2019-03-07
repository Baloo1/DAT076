import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown"
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
        this.selectProject = this.selectProject.bind(this);
        let project = null;
        console.log(this.props.projects);
        if (this.props.projects!==null) {
            project = this.props.projects[0];
        }
        this.state = {
            show: false,
            add: false,
            component: <React.Fragment/>,
            submitFunction: this.handleSubmit,
            selectedProject: project,
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
                    <Form.Group controlId="start_date">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group controlId="end_date">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                    </Form.Group>

                </Form>, submitFunction: this.handleSubmitAdd,show: true, add: true})
    }

    selectProject(project) {
        this.setState({selectedProject: project});
    }

    handleShow() {
            this.setState({component:
                <React.Fragment>
                    <DropdownButton id="dropdown-item-button" title="Select project">
                        {this.props.projects.map(project => (
                            <Dropdown.Item as="button" onClick={() => this.selectProject(project)}>{project.title}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <Form>
                        <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.selectedProject.title}/>
                        </Form.Group>
                        <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" as="textarea" rows="3" defaultValue={this.state.selectedProject.description}/>
                        </Form.Group>
                        <Form.Group controlId="start_date">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control type="date" defaultValue={this.state.selectedProject.start_date}/>
                        </Form.Group>
                        <Form.Group controlId="end_date">
                        <Form.Label>End date</Form.Label>
                        <Form.Control type="date" defaultValue={this.state.selectedProject.end_date}/>
                        </Form.Group>
                        <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        </Form.Group>

                </Form>
                </React.Fragment>, submitFunction: this.handleShow,show: true, add: false})


    }

    handleSubmit() {
        this.setState({ show: false });
    }

    handleSubmitAdd() {
        const formData = new FormData();
        alert(end_date.value)
        alert(new Date(end_date.value))
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('start_date', new Date(start_date.value));
        formData.append('end_date', new Date(end_date.value));
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/project/new',formData,config)
            .then((response) => {
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
        let edit = <Button variant="primary" onClick={this.handleShow} disabled>
            Edit
        </Button>
        if (this.props.projects!==null) {
            edit = <Button variant="primary" onClick={this.handleShow}>
                Edit
            </Button>
        }
        return (
            <>
                {edit}
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