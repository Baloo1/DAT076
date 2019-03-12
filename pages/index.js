import React from 'react';
import Head from 'next/head';
import {Container, Row, Col} from 'react-bootstrap';

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

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

