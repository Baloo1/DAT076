import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditProject from '../components/editProject';


export default class EditProjectContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.selectProject = this.selectProject.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.modifyDate = this.modifyDate.bind(this);
        this.fileChange = this.fileChange.bind(this);

        let project = null;
        if (this.props.projects!==null) {
            project = this.props.projects[0];
        }
        this.state = {
            show: false,
            add: false,
            submitFunction: this.handleSubmit,
            selectedProject: project,
            image: null
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
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };

        let image_id = this.state.selectedProject.image_id;

        if (this.state.image != null) {
            const formDataImg = new FormData();
            formDataImg.append('image', this.state.image);
            axios.post('/api/uploadimg', formDataImg, config)
                .then((response) => {
                    if (response.status == 200) {
                        image_id = response.data.id;
                        this.updateProject(image_id);
                    } else {
                        alert('Something went wrong with the image, ' + response.status + ': ' + response.statusText);
                    }
                }).catch((error) => {
                    alert('Something went wrong with the image, ' + error);
                });
        } else {
            this.updateProject(image_id);
        }


    }
    updateProject(image_id) {
        const formData = new FormData();
        formData.append('title', this.state.selectedProject.title);
        formData.append('description', this.state.selectedProject.description);
        formData.append('start_date', this.state.selectedProject.start_date);
        formData.append('end_date', this.state.selectedProject.end_date);
        formData.append('image_id',image_id);

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

    handleProjectChange(e) {
        let newSelectedProject = this.state.selectedProject;
        newSelectedProject[e.target.name] = e.target.value;
        this.setState({ selectedProject: newSelectedProject });
    }

    handleSubmitAdd() {
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };

        let image_id = this.state.selectedProject.image_id;

        if (this.state.image != null) {
            const formDataImg = new FormData();
            formDataImg.append('image', this.state.image);
            axios.post('/api/uploadimg', formDataImg, config)
                .then((response) => {
                    if (response.status == 200) {
                        image_id = response.data.id;
                        this.addProject(image_id);
                    } else {
                        alert('Something went wrong with the image, ' + response.status + ': ' + response.statusText);
                    }
                }).catch((error) => {
                    alert('Something went wrong with the image, ' + error);
                });
        } else {
            this.addProject(image_id);
        }
    }

    addProject(image_id) {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('start_date', start_date.value);
        formData.append('end_date', end_date.value);
        formData.append('image_id',image_id);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
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

    modifyDate(date) {
        let modified = date.substring(0,10);
        return modified;
    }

    fileChange(e) {
        this.setState({image: e.target.files[0]});
    }

    render() {
        return (
            <EditProject
                handleClose={this.handleClose}
                handleShow={this.handleShow}
                handleShowAdd={this.handleShowAdd}
                isAdding={this.state.add}
                isDisabled={this.props.projects===null}
                isShowing={this.state.show}
                projects={this.props.projects}
                selectedProject={this.state.selectedProject}
                selectProject={this.selectProject}
                submitFunction={this.state.submitFunction}
                handleProjectChange={this.handleProjectChange}
                modifyDate={this.modifyDate}
                fileChange={this.fileChange}
            />
        );
    }
}

EditProjectContainer.propTypes = {
    projects: PropTypes.array,
    id: PropTypes.number
};

