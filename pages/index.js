import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {Container, Row, Col} from 'react-bootstrap';

import MainCarousel from '../components/mainCarousel';
import MainNavBar from '../components/mainNavbar';
import MainJumbotron from '../components/mainJumbotron';

export default class Home extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/login'
      });
      res.end();
    } else {
      Router.push('/');
    }
    return {};
  }

  render() {
    return (
      <div>
        <Head>
          <title>DAT076</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
        </Head>
        <MainNavBar/>
        <MainJumbotron/>
        <Container>
          <Row>
            <Col><MainCarousel/></Col>
            <Col><MainJumbotron/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}