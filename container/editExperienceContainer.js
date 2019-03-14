import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditExperience from '../components/editExperience';


export default class EditExperienceContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.selectExperience = this.selectExperience.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.modifyDate = this.modifyDate.bind(this);

        let experience = null;
        if (this.props.experiences!==null) {
            experience = this.props.experiences[0];
        }
        this.state = {
            show: false,
            add: false,
            submitFunction: this.handleSubmit,
            selectedExperience: experience,
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.experiences!==prevProps.experiences) {
            this.setState({selectedExperience: this.props.experiences[0]});
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    selectExperience(experience) {
        this.setState({selectedExperience: experience});
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
        formData.append('title', this.state.selectedExperience.title);
        formData.append('description', this.state.selectedExperience.description);
        formData.append('start_date', this.state.selectedExperience.start_date);
        formData.append('end_date', this.state.selectedExperience.end_date);

        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };

        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/experience/'+this.state.selectedExperience.id+'/edit',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('Experience added');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
            alert('Something went wrong, ' + error);
        });
        this.setState({ show: false });
    }

    handleExperienceChange(e) {
        let newSelectedExperience = this.state.selectedExperience;
        newSelectedExperience[e.target.name] = e.target.value;
        this.setState({ selectedExperience: newSelectedExperience });
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
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/experience/new',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('Experience added');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
            alert('Something went wrong, ' + error);
        });
        this.setState({ show: false });
    }

    modifyDate(date) {
        if (date!==null) {
            return date.substring(0, 10);
        } else {
            return "";
        }
    }

    render() {
        return (
            <EditExperience
                handleClose={this.handleClose}
                handleShow={this.handleShow}
                handleShowAdd={this.handleShowAdd}
                isAdding={this.state.add}
                isDisabled={this.props.experiences===null}
                isShowing={this.state.show}
                experiences={this.props.experiences}
                selectedExperience={this.state.selectedExperience}
                selectExperience={this.selectExperience}
                submitFunction={this.state.submitFunction}
                handleExperienceChange={this.handleExperienceChange}
                modifyDate={this.modifyDate}
            />
        );
    }
}

EditExperienceContainer.propTypes = {
    experiences: PropTypes.array,
    id: PropTypes.number
};

