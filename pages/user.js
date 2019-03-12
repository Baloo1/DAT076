import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Head from 'next/head';
import axios from 'axios';

import UserContact from '../components/userContact';
import ExperienceTable from '../components/experienceTable';
import UserInformation from '../components/userInformation';
import Projects from '../components/projects';
import Upload from '../components/upload';
import MainNavBar from '../components/mainNavbar';


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
        console.log(user);
        return {user: user, experiences: experiences, projects: projects, about: abouts[0]};
    }


    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);

        this.state = {
            user_id: null,
            user: null,
            experiences: null,
            projects: null,
            about: null
        };
        this.getUser();
    }

    async componentDidMount() {
        const resU = await axios.get('http://localhost:3000/api/user/' + sessionStorage.user);
        const resE = await axios.get('http://localhost:3000/api/user/' + sessionStorage.user + '/experiences');
        const resP = await axios.get('http://localhost:3000/api/user/' + sessionStorage.user + '/projects');
        const resA = await axios.get('http://localhost:3000/api/user/' + sessionStorage.user + '/abouts');
        await this.setState({user_id: sessionStorage.user, user: resU.data, experiences: resE.data, projects: resP.data, about: resA.data[0]});
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
                            <UserContact user={this.state.user}/>
                            <Upload/>
                        </Col>
                        <Col>
                            <Col>
                                <UserInformation user={this.state.user} about={this.state.about}/>
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
