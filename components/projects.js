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

    const projectCards = [];
    for (var i = 0; i < this.props.projects.length; i += 1) {
      projectCards.push(<ProjectThumbnail project={this.props.projects[i]}/>);
    }
    return (
      <CardColumns>
        {projectCards}
      </CardColumns>
    );
  }
}




