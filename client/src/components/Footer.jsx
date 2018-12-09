import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGooglePlus, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
  return (
    <footer className="footer page-footer font-small mdb-color lighten-3 pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">
              {" "}
              Your New Prosthetic{" "}
            </h5>
            <p>Prosthetic Help</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              amet numquam iure provident voluptate esse quasi, veritatis totam
              voluptas nostrum.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <a href="#!">PROJECTS</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">BLOG</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fa fa-home mr-3" /> Birmingham, AL, 35222, US
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-envelope mr-3" />{" "}
                  contact@prostheticbyproxy.com
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-phone mr-3" /> + 01 234 567 88
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-print mr-3" /> + 01 234 567 89
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
            <FontAwesomeIcon className="icons" size="2x" icon={faFacebook} />
            <FontAwesomeIcon className="icons" size="2x" icon={faTwitter} />
            <FontAwesomeIcon className="icons" size="2x" icon={faGooglePlus} />
            <FontAwesomeIcon className="icons" size="2x" icon={faYoutube} />
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">
          {" "}
          ProstheticByProxy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
