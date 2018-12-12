import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import * as baseServices from "../services/base";
import "./UserProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    try {
      baseServices.populateAuthToken();

      let user = await baseServices.get("/api/users/me");

      if (user.donator_type === 0) {
        user.donator_type = "Individual donor";
      } else {
        user.donator_type = "Organization";
      }

      this.setState({ user });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Prosthetic By Proxy"
          subtitle="Provider of Prosthetic Patient Needs"
        />
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={`${this.state.user.profile_image}`} alt="" />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{this.state.user.name}</h5>
                  <h6>Web Developer and Designer</h6>
                  <h6>{this.state.user.donator_type}</h6>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Summary
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="col-md-8 infocontainer">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.phone_number}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Summary</label>
                    </div>
                    <div>
                      <p>
                        I've been an amputee for years with a lot of experience
                        in testing and adapting to new prosthetics. I hope to be
                        a good resource for people in need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
