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
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fa fa-facebook"> </i>
            </a>
            <a href="https://www.facebook.com/groups/838627816468346/">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-facebook"
                size="lg"
                icon={faFacebook}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fa fa-twitter"> </i>
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-twitter"
                size="lg"
                icon={faTwitter}
              />{" "}
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fa fa-google-plus"> </i>
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                icon="fa-google"
                size="lg"
                icon={faGooglePlus}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fa fa-linkedin"> </i>
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                className="brand-icons"
                id="fa-youtube"
                size="lg"
                icon={faYoutube}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fa fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        © 2018 Copyright: <b>Prosthetics by Proxy</b>
      </div>
    </footer>
  );
};
export default Footer;
