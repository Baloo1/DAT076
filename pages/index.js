import React from 'react';
import Head from 'next/head';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';

import MainNavBar from '../components/mainNavbar';


export default class Home extends React.Component {
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
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron fluid>
                                <h1>Make your own portfolio page!</h1>
                                <p>
                                    On this site you can make your own, almost professional looking portfolio.
                                    It's not quite that cool though since it was made in haste for a school project
                                    and we're not quite that smart yet. It was made with react-bootstrap
                                </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

