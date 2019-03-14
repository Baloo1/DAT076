import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default class EditExperienceForm extends React.Component {
    render() {
        const {
            experiences,
            selectExperience,
            selectedExperience,
            handleExperienceChange,
            modifyDate
        } = this.props;

        return (
            <React.Fragment>
                <DropdownButton id="dropdown-item-button" title="Select experience">
                    {experiences.map((experience,index) => (
                        <Dropdown.Item key={index} as="button" onClick={() => selectExperience(experience)}>{experience.title}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name={'title'}
                            type="text"
                            value={selectedExperience.title}
                            onChange={handleExperienceChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name={'description'}
                            type="text"
                            as="textarea"
                            rows="3"
                            value={selectedExperience.description}
                            onChange={handleExperienceChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="start_date">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control
                            name={'start_date'}
                            type="date"
                            value={modifyDate(selectedExperience.start_date)}
                            onChange={handleExperienceChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="end_date">
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                            type="date"
                            name={'end_date'}
                            value={modifyDate(selectedExperience.end_date)}
                            onChange={handleExperienceChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}

EditExperienceForm.propTypes = {
    experiences: PropTypes.array,
    selectedExperience: PropTypes.object,
    selectExperience: PropTypes.func,
    handleExperienceChange: PropTypes.func,
    modifyDate: PropTypes.func
};

