import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

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
                  <a href="#!">About Us</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Donate</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Blog</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">Awards</a>
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
            <a href="https://www.facebook.com/groups/838627816468346/">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-facebook"
                size="lg"
                icon={faFacebook}
              />
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-twitter"
                size="lg"
                icon={faTwitter}
              />{" "}
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                icon="fa-google"
                size="lg"
                icon={faGooglePlus}
              />
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-youtube"
                size="lg"
                icon={faYoutube}
              />
            </a>
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
