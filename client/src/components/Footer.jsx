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
   
 
<footer class="page-footer font-small special-color-dark pt-4">


    <div class="container">

      
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">
            <i class="fa fa-facebook"> </i>
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
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <i class="fa fa-twitter"> </i>
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
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <i class="fa fa-google-plus"> </i>
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
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <i class="fa fa-linkedin"> </i>
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
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
            <i class="fa fa-dribbble"> </i>
          </a>
        </li>
      </ul>
    

    </div>


   
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
   

  </footer>

  );
};
export default Footer;
