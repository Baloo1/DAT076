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
    for (var i = 0; i < this.state.projectLength; i += 1) {
      projectCards.push(<ProjectThumbnail/>);
    }
    return (
      <CardColumns>
        {projectCards}
      </CardColumns>
    );
  }
}




