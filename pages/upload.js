import React from "react";
import Head from 'next/head';
import {Container, Row, Col} from "react-bootstrap/";

function Upload() {

    // Use a <form> like this to upload
    return (
        <div>
            <Head>
                <title>Upload an image</title>
            </Head>
            <form method="post" encType="multipart/form-data" action="/api/uploadimg">
                <input type="file" name="image"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Upload;