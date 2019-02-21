import React from 'react'
import {ListGroup} from "react-bootstrap";
import Experience from "./Experience";

export default class ExperienceTable extends React.Component {
    render () {
        return (
        <ListGroup>
            <ListGroup.Item><Experience/></ListGroup.Item>
            <ListGroup.Item><Experience/></ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        );
    }
}