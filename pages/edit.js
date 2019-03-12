import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Head from 'next/head';

import MainNavBar from '../components/mainNavbar';
import UserContact from '../components/userContact';
import ExperienceTable from '../components/experienceTable';
import UserInformation from '../components/userInformation';
import Projects from '../components/projects';
import EditProject from '../components/editProject';
import axios from 'axios';
import PropTypes from 'prop-types';


export default class User extends React.Component {
    static async getInitialProps() {
        const res = await axios.get('http://127.0.0.1:3000/api/user/0');
        const user = await res.data;
        const id = user.id;
        const res1 = await axios.get('http://127.0.0.1:3000/api/user/'+id+'/experiences');
        const experiences = await res1.data;
        const res2 = await axios.get('http://127.0.0.1:3000/api/user/'+id+'/projects');
        const projects = await res2.data;
        const res3 = await axios.get('http://127.0.0.1:3000/api/user/'+id+'/abouts');
        const abouts = await res3.data;
        return {user: user, experiences: experiences, projects: projects, about: abouts[0]};
    }


    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);

        this.state = {
            user: null

        };
        this.getUser();

    }

    getUser() {
        // We're using axios instead of Fetch
        axios
        // The API we're requesting data from
            .get('http://127.0.0.1:3000/api/user/0')
            // Once we get a response, we'll map the API endpoints to our props
            .then(response =>
                response.data.map(user => ({
                    name: `${user.name}`,
                }))
            )
            .then(user => {
                console.log(user);
                this.setState({
                    user,
                });
            })
            // Let's make sure to change the loading state to display the data
            // We can still use the `.catch()` method since axios is promise-based
            .catch(error => this.setState({ error}));
    }

    render() {
        return (
            <div>
                <Head>
                    <title>User</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                        crossOrigin="anonymous"
                    />
                </Head>
                <MainNavBar/>
                <Container>
                    <Row>
                        <Col>
                            <UserContact user={this.props.user}/>
                        </Col>
                        <Col>
                            <Col>
                                <UserInformation user={this.props.user} about={this.props.about}/>
                            </Col>
                            <Col>
                                <ExperienceTable experiences={this.props.experiences}/>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Projects projects={this.props.projects}/>
                    </Row>
                    <Row>
                        <EditProject id={this.props.user.id} projects={this.props.projects}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object,
    projects: PropTypes.array,
    experiences: PropTypes.object,
    about: PropTypes.object
};
