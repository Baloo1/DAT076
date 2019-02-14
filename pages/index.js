import React from "react";
import {Navbar} from "react-bootstrap"
import Head from 'next/head';

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import TempNavBar from "./navbar";

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
        <TempNavBar/>
      </div>
  )
}
export default Home