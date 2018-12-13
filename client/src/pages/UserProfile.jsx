import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import * as baseServices from "../services/base";
import * as prostheticsServices from "../services/prosthetics";
import "./UserProfile.css";

import moment from 'moment';

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
      let singleUsersProthetics = prosthetics.filter(function (singleThang) {
        return user.id === singleThang.userid;
      });
      this.setState({ singleUsersProthetics });

    } catch (e) {
      console.log(e);
    }
  }

  renderDonations() {
    return this.state.singleUsersProthetics.map(item => {
      return (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center"><span className="esketit">{item.brand}</span>{item.part_status === 1 ? <span className="btn btn-success esketit">Reserved</span>: <span className="btn btn-danger esketit">Pending</span>}</li>
      );
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Prosthetic By Proxy"
          subtitle="Provider of Prosthetic Patient Needs"
        />
        <div className="container" style={{ borderRadius: '10px', backgroundColor: '#d6d6d6' }}>
          <div className="row">
            {/* avatar */}
            <div className="col-md-12">
              <div className="d-flex justify-content-center h-100">
                <div className="image_outer_container">
                  {/* <div className="green_icon"></div> */}
                  <div className="image_inner_container">
                    <img src={this.state.user.profile_image} alt="user avatar" />
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="col-md-12">
              <h3 className="esketit text-center">Profile</h3>
              <div className="card" style={{ boxShadow: '0 .5rem 1rem rgba(0, 0, 0, .15)' }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between"><span className="esketit">Name: </span><span className="esketit">{this.state.user.name}</span></li>
                  <li className="list-group-item d-flex justify-content-between"><span className="esketit">Email: </span><span className="esketit">{this.state.user.email}</span></li>
                  <li className="list-group-item d-flex justify-content-between"><span className="esketit">User Type: </span><span className="esketit">{this.state.user.donator_type}</span></li>
                  <li className="list-group-item d-flex justify-content-between"><span className="esketit">Joined: </span><span className="esketit">{moment(this.state.user._created).format('LLL')}</span></li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <h3 className="esketit text-center">Donations</h3>
              {this.state.singleUsersProthetics.length > 0 ? <div className="card" style={{ boxShadow: '0 .5rem 1rem rgba(0, 0, 0, .15)' }}>
                <ul className="list-group list-group-flush">
                  {this.renderDonations()}
                </ul>
              </div> : null}
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default UserProfile;
