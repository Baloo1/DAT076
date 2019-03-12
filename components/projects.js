import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import ProjectThumbnail from './projectThumbnail';



export default class Projects extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      projectLength: 5,
    };

  }

  render() {
    let projectCards = [];
    if (this.props.project != null) {
      for (let i = 0; i < this.props.projects.length; i += 1) {
        projectCards.push(<ProjectThumbnail project={this.props.projects[i]}/>);
      }
    } else {
      projectCards = <React.Fragment/>
    }

    return (
      <CardColumns>
        {projectCards}
      </CardColumns>
    );
  }
}




