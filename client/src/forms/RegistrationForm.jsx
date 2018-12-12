import React from "react";
import "./RegistrationForm.css";
import { withRouter } from "react-router";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      username: '',
      donator_type: 0
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

    let userObject = {
      addressid: 1,
      donator_type: this.state.donator_type,
      phone_number: 5555555555,
      name: this.state.name,
      email: this.state.email,
      hash: this.state.password
    };

    try {
      let res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(userObject),
        headers: {
          "Content-Type": "application/json"
        }
      });
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
            <h5 className="outlineblack whitepacifico m-3 text-center" style={{ fontSize: "24px" }} >Sign up and Join! It's 100% free!</h5>
            <form className="" method="post" action="#">
              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Your Name
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      value={this.state.name}
                      onChange={(e) => this.handleNameChange(e)}
                      type="text"
                      className="form-control"
                      style={{ borderRadius: ".5em", backgroundColor: "black", color: "white" }}
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Your Email
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true" />
                    </span>
                    <input
                      value={this.state.emaik}
                      onChange={(e) => this.handleEmailChange(e)}
                      type="text"
                      className="form-control"
                      style={{ borderRadius: ".5em", backgroundColor: "black", color: "white" }}
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Username
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-users fa" aria-hidden="true" />
                    </span>
                    <input
                      value={this.state.username}
                      onChange={(e) => this.setState({ username: e.target.value })}
                      type="text"
                      className="form-control"
                      style={{ borderRadius: ".5em", backgroundColor: "black", color: "white" }}
                      name="username"
                      id="username"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Donor or Recipient?
                </label>
                <div className="cols-sm-10">
                  <div className="input-group" style={{ borderRadius: ".5em", border: '.5px solid white', backgroundColor: "black", color: "white" }}>
                    <span className="input-group-addon">
                      <i className="fa fa-users fa" aria-hidden="true" />
                    </span>
                    <div className="form-check form-check-inline mx-5 my-2">
                      <input
                        className="form-check-input"
                        onChange={(e) => this.setState({ donator_type: e.target.value })}
                        type="checkbox"
                        value={0} />
                      <label className="form-check-label redbungee outlineblack" style={{ fontSize: "24px" }}>Donor</label>
                    </div>
                    <div className="form-check form-check-inline mx-5 my-2">
                      <input
                        className="form-check-input"
                        onChange={(e) => this.setState({ donator_type: e.target.value })}
                        type="checkbox"
                        value={1} />
                      <label className="form-check-label redbungee outlineblack" style={{ fontSize: "24px" }}>Recipient</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      value={this.state.password}
                      onChange={(e) => this.handlePasswordChange(e)}
                      type="password"
                      className="form-control"
                      style={{ borderRadius: ".5em", backgroundColor: "black", color: "white" }}
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label redbungee outlineblack pl-2"
                  style={{ fontSize: "24px" }}>
                  Confirm Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      value={this.state.passwordConfirm}
                      onChange={(e) => this.handleConfirmPasswordChange(e)}
                      type="password"
                      className="form-control"
                      style={{ borderRadius: ".5em", backgroundColor: "black", color: "white" }}
                      name="confirm"
                      id="confirm"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group m-5">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg btn-block login-button redbungee outlineblack mt-3"
                  style={{ fontSize: "24px" }}
                  onClick={() => this.onSubmit()}
                >
                  Register
                </button>
                <main>
                  <div className="container">
                    {/* <!--Grid row--> */}
                    <div className="row py-5">
                      {/* <!--Grid column--> */}
                      <div className="col-md-12 text-center" >
                        <p className="" style={{ color: "white", fontSize: "30px" }}>FYI <br />May accept donations of used prosthetic limbs and/or components and distributes all forms of prosthetic limbs to those in need. goal is to collect old prosthetic parts and ship them overseas so that more amputees will have greater access.</p>
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
