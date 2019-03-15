import React from 'react';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ProjectThumbnail extends React.Component {
    render() {
        const {
            project,
            start_date,
            end_date,
            img,
            onMouseOut,
            onMouseOver,
            style
        } = this.props;

        return (
            <Card onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                <Card.Img variant="top" src={img} alt="Picture"/>
                <Card.Body>
                    <Card.ImgOverlay style={style}>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            {project.description}
                        </Card.Text>
                        <Card.Text> {start_date} – {end_date} </Card.Text>
                    </Card.ImgOverlay>
                </Card.Body>
            </Card>
        );
    }
}

ProjectThumbnail.propTypes = {
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    project: PropTypes.object,
    img: PropTypes.string,
    style: PropTypes.any
};
