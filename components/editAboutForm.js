import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default class EditAboutForm extends React.Component {
    render() {
        const {
            abouts,
            selectAbout,
            selectedAbout,
            handleAboutChange,
        } = this.props;

        return (
            <React.Fragment>
                <DropdownButton id="dropdown-item-button" title="Select about">
                    {abouts.map((about,index) => (
                        <Dropdown.Item key={index} as="button" onClick={() => selectAbout(about)}>{about.title}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name={'title'}
                            type="text"
                            value={selectedAbout.title}
                            onChange={handleAboutChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name={'description'}
                            type="text"
                            as="textarea"
                            rows="3"
                            value={selectedAbout.description}
                            onChange={handleAboutChange}
                        />
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}

EditAboutForm.propTypes = {
    abouts: PropTypes.array,
    selectedAbout: PropTypes.object,
    selectAbout: PropTypes.func,
    handleAboutChange: PropTypes.func,
};

