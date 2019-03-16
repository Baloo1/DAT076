import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EditContact from '../components/editContact';

export default class EditContactContainer extends React.Component {
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
                'x-access-token': localStorage.getItem('jwtToken')
            }
        };

        let image_id = this.props.user.image_id;

        if(this.state.image != null) {
            const formDataImg = new FormData();
            formDataImg.append('image', this.state.image);
            axios.post('/api/uploadimg', formDataImg, config)
                .then((response) => {
                    if(response.status == 200) {
                        image_id = response.data.id;
                        this.updateUser(image_id);
                    } else {
                        alert('Something went wrong with the image, ' + response.status + ': ' + response.statusText);
                    }
                }).catch((error) => {
                    alert('Something went wrong with the image, ' + error);
                });
        } else {
            this.updateUser(image_id);
        }
    }

    updateUser(img_id) {
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': localStorage.getItem('jwtToken')
            }
        };
        const formData = new FormData();
        formData.append('name', name.value);
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
        if (this.props.user == null) {
            return null;
        } else {
            return (
                <EditContact
                    user={this.props.user}
                    handleShow={this.handleShow}
                    handleClose={this.handleClose}
                    handleSubmit={this.handleSubmit}
                    fileChange={this.fileChange}
                    show={this.state.show}
                />
            );
        }
    }
}

EditContactContainer.propTypes = {
    user: PropTypes.object
};
