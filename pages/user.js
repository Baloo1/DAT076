import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import UserHeader from "./userHeader";
import UserContact from "./userContact";
import ExperienceTable from "./experienceTable";
import UserInformation from "./userInformation";

export default class User extends React.Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <Container>
                    <Row>
                        <Col>
                            <UserContact/>
                        </Col>
                        <Col>
                            <UserInformation/>
                        </Col>
                    </Row>
                    <Row>
                        <ExperienceTable/>
                    </Row>
                </Container>
            </div>
            );
    }
}