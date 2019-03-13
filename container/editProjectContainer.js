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
            />
        );
    }
}

EditProjectContainer.propTypes = {
    projects: PropTypes.array,
    id: PropTypes.object
};

