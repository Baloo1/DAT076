import React from 'react';
import axios from 'axios';
import MainNavBar from '../components/mainNavbar';
import LoginBox from '../components/login';
import RegisterBox from '../components/register';


export default class MainNavBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowRegister = this.handleShowRegister.bind(this);
        this.handleCloseRegister = this.handleCloseRegister.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            showLogin: false,
            showRegister: false,
            isLoggedIn: false,
            user: null
        };
    }

    async componentDidMount() {
        if(window.sessionStorage.getItem('user') != null) {
            await this.setState({isLoggedIn: true});
            this.setState({user: window.sessionStorage.getItem('user')});
        }
    }

    handleCloseRegister() {
        this.setState({showRegister: false});
    }

    handleShowRegister() {
        this.setState({showRegister: true});
    }

    handleLogout() {
        this.setState({isLoggedIn: false});
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        window.location = '/';
    }

    handleRegister() {
        const formData = new FormData();
        formData.append('email', registerEmail.value);
        formData.append('password', registerPassword.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/register',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    alert('Registration successful, please login');
                    this.setState({showRegister: false});
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
                alert('Something went wrong, ' + error.response.data);
            });
    }

    handleCloseLogin() {
        this.setState({showLogin: false});
    }

    handleShowLogin() {
        this.setState({showLogin: true});
    }

    handleLogin() {
        const formData = new FormData();
        formData.append('email', loginEmail.value);
        formData.append('password', loginPassword.value);
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };
        axios.post('http://127.0.0.1:3000/api/login',formData,config)
            .then((response) => {
                if(response.status === 200) {
                    sessionStorage.setItem('user', response.data.user);
                    sessionStorage.setItem('jwtToken', response.data.token);
                    this.setState({isLoggedIn: true, showLogin: false, user: response.data.user});
                } else {
                    alert('Something went wrong, ' + response.status + ': ' + response.statusText);
                }
            }).catch((error) => {
                alert('Something went wrong, ' + error.response.data);
            });
    }

    render() {
        return (
            <React.Fragment>
                <MainNavBar
                    isLoggedIn={this.state.isLoggedIn}
                    handleShowRegister={this.handleShowRegister}
                    handleShowLogin={this.handleShowLogin}
                    handleLogout={this.handleLogout}
                    user={this.state.user}
                />

                <LoginBox
                    showLogin={this.state.showLogin}
                    handleCloseLogin={this.handleCloseLogin}
                    handleLogin={this.handleLogin}
                />

                <RegisterBox
                    showRegister={this.state.showRegister}
                    handleCloseRegister={this.handleCloseRegister}
                    handleRegister={this.handleRegister}
                />
            </React.Fragment>
        );
    }
}
