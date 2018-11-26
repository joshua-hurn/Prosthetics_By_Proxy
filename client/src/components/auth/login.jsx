import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    async componentDidMount() {
        try {
            let loggedIn = userService.checkLogin();
            if (loggedIn) {
                this.setState({ redirectToReferrer: true, checkingLogin: false});
            } else {
                this.setState({ checkingLogin: false });
            }
        } catch (e) {
            this.setState({ checkingLogin: false });
        }
    }

    async login(e) {
        e.preventDefault();
        try {
            await userService.login(this.state.email, this.state.password);
            this.setState({ redirectToReferrer: true });
        } catch (e) {
            if (e.message) {
                this.setState({ feedbackMessage: err.message });
            }
        }
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
       const { from } = this.props.location.state || { from: { pathname: '/' } };
       const { redirectToReferrer, checkingLogin } = this.state;

       if (checkingLogin) {
           return <IndeterminateProgress message="Checking Login Status..." />;
       }
       if (redirectToReferrer) {
           return (
               <Redirect to={from} />
           );
       }

       return (
           <Fragment>
                <p>You must be logged in to view this page.</p>
                <form onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required /> 
                    </div>
                    {this.state.feedbackMessage ? (
                        <p>{ this.state.feedbackMessage }</p>
                    ): null}
                    <input type="submit" value="Login" className="btn btn-primary" />
                </form>
            </Fragment>
       );
    }
}

export default Login;