import React from 'react';
import {Col, Container, Row, Tab, ListGroup} from 'react-bootstrap';
import Head from 'next/head';
import axios from 'axios';
import UserContact from '../components/userContact';
import ExperienceTable from '../components/experienceTable';
import UserInformation from '../components/userInformation';
import Projects from '../components/projects';
import MainNavbarContainer from '../container/mainNavbarContainer';
import { withRouter } from 'next/router';
import CompactUserDisplay from "../components/compactUserDisplay";


class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    async componentDidMount() {
        const config = {
            headers: {
                'content-type': 'multi-part/form-data',
                'x-access-token': sessionStorage.getItem('jwtToken')
            }
        };
        const resUsers = await axios.get('http://localhost:3000/api/users', config).catch(() => {
            alert('Error retrieving users')
        });
        await this.setState({users: resUsers.data})
    }

    render() {
        if(this.state.users == null) {
            return (
                <div>
                    <Head>
                        <title>Admin page</title>
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                            crossOrigin="anonymous"
                        />
                    </Head>
                    <MainNavbarContainer/>
                    <p>Loading users...</p>
                </div>
            )
        }

        const userDisplays = [];
        for (let i = 0; i < this.state.users.length; i += 1) {
            userDisplays.push(
                <Tab.Pane eventKey={"#user" + i}>
                    <CompactUserDisplay key={i} user={this.state.users[i]}/>
                </Tab.Pane>
            );
        }

        const listGroups = [];
        for (let i = 0; i < this.state.users.length; i += 1) {
            listGroups.push(
                <ListGroup.Item action href={"#user" + i}>
                    Id: {this.state.users[i].id}. Email: {this.state.users[i].email}
                </ListGroup.Item>
            );
        }

            return (
            <div>
                <Head>
                    <title>Admin page</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                        crossOrigin="anonymous"
                    />
                </Head>
                <MainNavbarContainer/>
                <Tab.Container>
                    <Row>
                        <Col sm={4}>
                            <ListGroup defaulActiveKey="#user1">
                                { listGroups }
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                { userDisplays }
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Admin;