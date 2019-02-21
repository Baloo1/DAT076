import React from "react";
import Head from 'next/head';
import {Container, Row, Col} from "react-bootstrap";
import MainCarousel from "./mainCarousel";
import MainNavBar from './mainNavbar';
import MainJumbotron from "./mainJumbotron";
import ExperienceTable from "./experienceTable";

function Home() {

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
        <ExperienceTable/>
      </div>
  );
}
export default Home;