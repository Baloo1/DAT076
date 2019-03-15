import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';



export default class UserContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false,
        };
    }

    render() {
        if (this.props.user == null) {
            return (
                <Card>
                    <Card.Img variant="top" src="/api/display/0" alt="Profile picture"/>
                    <Card.Header>Loading... </Card.Header>
                    <Card.Body>
                        <Card.Title>Contact information</Card.Title>
                        <Card.Text>
                            Phone nr: Loading... {'\n'}
                            Email: Loading... {'\n'}
                            Website: Loading... {'\n'}
                            Twitter: Loading... {'\n'}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        } else {
            return (
                <Card>
                    <Card.Img variant="top" src={'/api/display/' + this.props.user.image_id} alt="Profile picture"/>
                    <Card.Header>{this.props.user.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Contact information</Card.Title>
                        <Card.Text>
                            Phone nr: {this.props.user.phone}<br/>
                            Email: {this.props.user.email}<br/>
                            Website: <Link href={'https://' + this.props.user.website}><a>{this.props.user.website}</a></Link>
                            <br/>
                            Twitter: <Link href={'https://twitter.com/' + this.props.user.twitter.substring(1)}><a>{this.props.user.twitter}</a></Link>
                            <br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <CopyToClipboard text={'https://www.example.com/user/'+this.props.user.name+'/'+this.props.user.id}
                            onCopy={()=>this.setState({copied: true})}>
                            <Button>{this.state.copied ? 'Copied' : 'Get Link'}</Button>
                        </CopyToClipboard>
                    </Card.Footer>
                </Card>
            );
        }
    }
}

UserContact.propTypes = {
    user: PropTypes.object
};
