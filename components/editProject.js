import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PropTypes from 'prop-types';
import EditProjectForm from './editProjectForm';
import AddProjectForm from './addProjectForm';


export default class EditProject extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.selectProject = this.selectProject.bind(this);
        let project = null;
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

    componentDidUpdate(prevProps) {
        if(this.props.projects!==prevProps.projects) {
            this.setState({selectedProject: this.props.projects[0]});
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    selectProject(project) {
        console.log(project);
        this.setState({selectedProject: project});
    }

    handleShow() {
        this.setState({
            submitFunction: this.handleSubmit,
            show: true,
            add: false
        });
    }

    handleShowAdd() {
        this.setState({
            submitFunction: this.handleSubmitAdd,
            show: true,
            add: true
        });
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('start_date', start_date.value);
        formData.append('end_date', end_date.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/project/'+this.state.selectedProject.id+'/edit',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('Project added');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
                alert('Something went wrong, ' + error);
            });
        this.setState({ show: false });
    }

    handleSubmitAdd() {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('start_date', start_date.value);
        formData.append('end_date', end_date.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/project/new',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('Project added');
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
                <Button variant="primary" onClick={this.handleShow} disabled={this.props.projects===null}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={this.handleShowAdd}>
                    Add
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.add ?
                            <AddProjectForm /> :
                            <EditProjectForm
                                projects={this.props.projects}
                                selectedProject={this.state.selectedProject}
                                selectProject={this.selectProject}
                            />
                        }
                    </Modal.Body>
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

EditProject.propTypes = {
    projects: PropTypes.array,
    id: PropTypes.object
};

