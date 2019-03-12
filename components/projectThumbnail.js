import React from 'react';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ProjectThumbnail extends React.Component {
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

    async mouseOut() {
        await this.setState({style: {display: 'none'}});
    }

    async mouseOver() {
        await this.setState({style: {}});
    }

    render() {
        return (
            <Card onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
                <Card.Img variant="top" src={this.state.img} alt="Picture"/>
                <Card.Body>
                    <Card.ImgOverlay>
                        <Card.Title>{this.props.project.title}</Card.Title>
                        <Card.Text>
                            {this.props.project.description}
                        </Card.Text>
                        <Card.Text> {this.state.start_date} – {this.state.end_date} </Card.Text>
                    </Card.ImgOverlay>
                </Card.Body>
            </Card>
        );
    }
}

ProjectThumbnail.propTypes = {
    project: PropTypes.object
};
