import React, { Component, Fragment } from "react";
import "./LoginForm.css";
import * as userService from "../services/user";
import { Redirect, withRouter } from "react-router-dom";
import IndeterminateProgress from "../components/utilities/indeterminateProgress";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      email: "",
      password: "",
      feedbackMessage: "",
      checkingLogin: true
    };
  }

  componentDidMount() {
    userService.checkLogin().then(loggedIn => {
      if (loggedIn) {
        this.setState({ redirectToReferrer: true, checkingLogin: false });
      } else {
        this.setState({ checkingLogin: false });
      }
    });
  }

  login(e) {
    e.preventDefault();
    userService
      .login(this.state.email, this.state.password)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(err => {
        if (err.message) {
          this.setState({ feedbackMessage: err.message });
        }
      });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, checkingLogin } = this.state;

    if (checkingLogin) {
      return <IndeterminateProgress message="Checking Login Status..." />;
    }
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div class="container register">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
            </ul>

            <div class="row register-form">
              <div class="col-md-12">
                <form method="post" onSubmit={e => this.login(e)}>
                  <div class="form-group">
                    <label htmlFor="email"> Email </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={e => {
                        this.handleEmailChange(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="password"> Password </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter a password. Make it secure!"
                      onChange={e => {
                        this.handlePasswordChange(e.target.value);
                      }}
                    />
                  </div>
                  {this.state.feedbackMessage ? (
                    <p>{this.state.feedbackMessage}</p>
                  ) : null}
                  <input
                    class="btnContactSubmit"
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
