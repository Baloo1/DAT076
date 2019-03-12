import React from 'react';
import {Button, Card, Table} from 'react-bootstrap';

export default class UserInformation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Loading...',
        }
    }

    render() {
        if(this.props.abouts == null || this.props.user == null) {
            return (
                <Card>
                    <Card.Header as="h5">Loading...</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Loading...
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        } else {
            const abouts = this.props.abouts.map((about) =>
                <tr>
                    <td style={{background: 'lightgray', width: '20%'}}>{about.title}</td>
                    <td>{about.description}</td>
                </tr>
            );

            return (
                <div>
                    <h3>About me</h3>
                    <Table striped bordered>
                        <tbody>
                            {abouts}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}