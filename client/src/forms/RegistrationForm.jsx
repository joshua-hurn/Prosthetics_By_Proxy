import React from "react";
import "./RegistrationForm.css";
import * as baseServices from "../services/base";
import { withRouter } from "react-router";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleConfirmPasswordChange(event) {
    this.setState({ passwordConfirm: event.target.value });
  }

  async onSubmit(event) {
    try {
      let res = await blogServices.insert(this.state);
      this.props.history.replace("/");
    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/ThankYou1");
  };

  render() {
    return (
      <div className="container">
        <div className="row main">
          <div className="main-login main-center">
            <h5>Sign up and Join! It's 100% free!</h5>
            <form className="" method="post" action="#">
              <div className="form-group">
                <label for="name" className="cols-sm-2 control-label">
                  Your Name
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="email" className="cols-sm-2 control-label">
                  Your Email
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="password" className="cols-sm-2 control-label">
                  Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">
                  Confirm Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="confirm"
                      id="confirm"
                      placeholder="Confirm your Password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group ">
                <button
                  href="/ThankYou1"
                  target="_blank"
                  type="button"
                  className="btn btn-primary btn-lg btn-block login-button"
                  onClick={this.onRegister}
                >
                  Register
                </button>
                <main>
                  <div className="container">
                    {/* <!--Grid row--> */}
                    <div className="row py-5">
                      {/* <!--Grid column--> */}
                      <div className="col-md-12 text-center">
                        <p>
                          May accept donations of used prosthetic limbs and/or
                          components and distributes all forms of prosthetic
                          limbs to those in need. goal is to collect old
                          prosthetic parts and ship them overseas so that more
                          amputees will have greater access.
                        </p>
                      </div>
                      {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                  </div>
                </main>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegistrationForm);
