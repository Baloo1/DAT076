import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import UserHeader from './userHeader';
import UserContact from './userContact';
import ExperienceTable from './experienceTable';
import UserInformation from './userInformation';
import Head from 'next/head';
import Projects from './projects';

export default class User extends React.Component {
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
        <UserHeader/>
        <Container>
          <Row>
            <Col>
              <UserContact/>
            </Col>
            <Col>
              <Col>
                <UserInformation/>
              </Col>
              <Col>
                <ExperienceTable/>
              </Col>
            </Col>
          </Row>
          <Row>
            <Projects projects={this.props.projects}/>
          </Row>
        </Container>
      </div>
    );
  }
}