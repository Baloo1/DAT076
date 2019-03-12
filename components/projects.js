import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import ProjectThumbnail from './projectThumbnail';



export default class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let projectCards = [];

    if (this.props.projects == null) {
      projectCards = <React.Fragment/>

    } else {
      for (let i = 0; i < this.props.projects.length; i += 1) {
        projectCards.push(<ProjectThumbnail key={i} project={this.props.projects[i]}/>);
      }
    }

    return (
      <CardColumns>
        {projectCards}
      </CardColumns>
    );
  }
}




