import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditAbout from '../components/editAbout';


export default class EditAboutContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);

        let about = null;
        if (this.props.abouts!==null) {
            about = this.props.abouts[0];
        }
        this.state = {
            show: false,
            add: false,
            submitFunction: this.handleSubmit,
            selectedAbout: about,
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.abouts!==prevProps.abouts) {
            this.setState({selectedAbout: this.props.abouts[0]});
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    selectAbout(about) {
        this.setState({selectedAbout: about});
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
        formData.append('title', this.state.selectedAbout.title);
        formData.append('description', this.state.selectedAbout.description);


        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': localStorage.getItem('jwtToken')
            }
        };

        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/about/'+this.state.selectedAbout.id+'/edit',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('About added');
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
                alert('Something went wrong, ' + error);
            });
        this.setState({ show: false });
    }

    handleAboutChange(e) {
        let newSelectedAbout = this.state.selectedAbout;
        newSelectedAbout[e.target.name] = e.target.value;
        this.setState({ selectedAbout: newSelectedAbout });
    }

    handleSubmitAdd() {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);

        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': localStorage.getItem('jwtToken')
            }
        };
        axios.post('http://127.0.0.1:3000/api/user/'+this.props.id+'/about/new',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('About added');
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
            <EditAbout
                handleClose={this.handleClose}
                handleShow={this.handleShow}
                handleShowAdd={this.handleShowAdd}
                isAdding={this.state.add}
                isDisabled={this.props.abouts.length===0}
                isShowing={this.state.show}
                abouts={this.props.abouts}
                selectedAbout={this.state.selectedAbout}
                selectAbout={this.selectAbout}
                submitFunction={this.state.submitFunction}
                handleAboutChange={this.handleAboutChange}
            />
        );
    }
}

EditAboutContainer.propTypes = {
    abouts: PropTypes.array,
    id: PropTypes.number
};

