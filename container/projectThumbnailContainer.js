import React from 'react';
import PropTypes from 'prop-types';
import ProjectThumbnail from '../components/projectThumbnail';

export default class ProjectThumbnailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);

        let modded_end_date = this.props.project.end_date;
        let modded_start_date = this.props.project.start_date;
        if(modded_end_date == null) {
            modded_end_date = 'present';
        } else {
            modded_end_date = modded_end_date.substring(0, 10);
        }
        if(modded_start_date == null) {
            modded_start_date = 'unknown';
        } else {
            modded_start_date = modded_start_date.substring(0, 10);
        }

        let img;
        if (this.props.project.image_id===null) {
            img = 0;
        } else {
            img = this.props.project.image_id;
        }

        this.state = {
            projectLength: 0,
            img: '/api/display/'+img,
            start_date: modded_start_date,
            end_date: modded_end_date,
            style: {display: 'none'}
        };

    }

    mouseOut() {
        this.setState({style: {display: 'none'}});
    }

    mouseOver() {
        this.setState({style: {}});
    }

    render() {
        return (
            <ProjectThumbnail
                project={this.props.project}
                start_date={this.state.start_date}
                end_date={this.state.end_date}
                img={this.state.img}
                onMouseOut={this.mouseOut}
                onMouseOver={this.mouseOver}
                style={this.state.style}
            />
        );
    }
}

ProjectThumbnailContainer.propTypes = {
    project: PropTypes.object
};
