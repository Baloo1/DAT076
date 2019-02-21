import React from 'react';
import Head from 'next/head';
import {Container, Row, Col} from 'react-bootstrap/';

function Login() {
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
      <Container>
        <Row>
          <Col>
            <h3>
              You must login before you can edit your profile
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;