import React from 'react';
import PropTypes from 'prop-types';
import Experience from '../components/experience';

export default class ExperienceContainer extends React.Component {
    constructor(props) {
        super(props);
        let end_date;
        if (!(this.props.experience.end_date===null)) {
            end_date = this.props.experience.end_date.substring(0, 10);
        } else {
            end_date = 'present';
        }

        this.state = {
            start_date: this.props.experience.start_date.substring(0, 10),
            end_date: end_date,
        };

    }
    render() {
        return (
            <Experience
                experience={this.props.experience}
                start_date={this.state.start_date}
                end_date={this.state.end_date}
            />
        );
    }
}

ExperienceContainer.propTypes = {
    experience: PropTypes.object
};
