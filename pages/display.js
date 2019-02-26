import React from "react";
import Head from 'next/head';
import {Container, Row, Col} from "react-bootstrap/";

function Display() {

    // Use a <form> like this to upload
    return (
        <div>
            <Head>
                <title>Display an image</title>
            </Head>
            <img src="/api/display/2"/>
        </div>
    );
}

export default Display;