import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import * as baseServices from "../services/base";
import * as prostheticsServices from "../services/prosthetics";
import ProstheticsCard from "../components/Cards/ProstheticsCard";
import "./UserProfile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      singleUsersProthetics: []
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
      let prosthetics = await prostheticsServices.all();
      let singleUsersProthetics = prosthetics.filter(function(singleThang) {
        return user.id === singleThang.userid;
      });
      this.setState(singleUsersProthetics);
    } catch (e) {
      console.log(e);
    }
  }

  renderProsthetics = () => {
    return this.state.singleUsersProthetics.map(prosthetic => {
      return <ProstheticsCard key={prosthetic.id} prosthetic={prosthetic} />;
    });
  };

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
                        id="about"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-controls="about"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="summary"
                        data-toggle="tab"
                        href="#summary"
                        role="tab"
                        aria-controls="summary-tab"
                        aria-selected="false"
                      >
                        Summary
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="postedItems"
                        data-toggle="tab"
                        href="#postedItem"
                        role="tab"
                        aria-controls="posted-items"
                        aria-selected="false"
                      >
                        Posted Items
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
                  id="#about"
                  role="tabpanel"
                  aria-labelledby="about"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label className="info-labels">Name:</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="info-labels">Email:</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="info-labels">Phone:</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.user.phone_number}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="#summary-tab"
                  role="tabpanel"
                  aria-labelledby="summary"
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
                <div
                  className="tab-pane fade"
                  id="#postedItem-tab"
                  role="tabpanel"
                  aria-labelledby="postedItems"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Posted Items</label>
                    </div>
                    <div>
                      {this.renderProsthetics()}
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
