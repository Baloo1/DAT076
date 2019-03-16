import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Head from 'next/head';
import axios from 'axios';
import UserContact from '../components/userContact';
import ExperienceTable from '../components/experienceTable';
import UserInformation from '../components/userInformation';
import Projects from '../components/projects';
import MainNavbarContainer from '../container/mainNavbarContainer';


export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: null,
            user: null,
            experiences: null,
            projects: null,
            abouts: null
        };
    }

    async componentDidMount() {
        const resU = await axios.get('http://localhost:3000/api/user/' + localStorage.user);
        const resE = await axios.get('http://localhost:3000/api/user/' + localStorage.user + '/experiences');
        const resP = await axios.get('http://localhost:3000/api/user/' + localStorage.user + '/projects');
        const resA = await axios.get('http://localhost:3000/api/user/' + localStorage.user + '/abouts');
        await this.setState({user_id: localStorage.user, user: resU.data, experiences: resE.data, projects: resP.data, abouts: resA.data});
    }

    render() {
        return (
            <div>
                <Head>
                    <title>My Page</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                        crossOrigin="anonymous"
                    />
                </Head>
                <MainNavbarContainer/>
                <Container>
                    <Row>
                        <Col>
                            <UserContact user={this.state.user}/>
                        </Col>
                        <Col>
                            <Col>
                                <UserInformation user={this.state.user} abouts={this.state.abouts}/>
                            </Col>
                            <Col>
                                <ExperienceTable experiences={this.state.experiences}/>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Projects projects={this.state.projects}/>
                    </Row>
                </Container>
            </div>
        );
    }
}
