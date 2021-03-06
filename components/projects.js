import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import PropTypes from 'prop-types';

import ProjectThumbnailContainer from '../container/projectThumbnailContainer';


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projectCards = [];

        if (this.props.projects == null) {
            projectCards = <React.Fragment/>;

        } else {
            for (let i = 0; i < this.props.projects.length; i += 1) {
                projectCards.push(<ProjectThumbnailContainer key={i} project={this.props.projects[i]}/>);
            }
        }

        return (
            <div>
                <h3>Projects</h3>
                <CardColumns>
                    {projectCards}
                </CardColumns>
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array
};
