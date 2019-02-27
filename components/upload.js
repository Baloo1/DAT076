import React from 'react';
const axios =require('axios');

export default class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { image: null };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/uploadimg", formData, config)
            .then((response) => {
                if(response.status == 200) {
                    alert("The file is successfully uploaded");
                } else {
                    alert("Something went wrong, " + response.status + ": " + response.statusText)
                }
            }).catch((error) => {
            alert("Something went wrong, " + error)
        });
    }

    onChange(e) {
        this.setState({image: e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="image" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}