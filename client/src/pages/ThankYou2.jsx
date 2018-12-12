import React from "react";

class ThankYou2 extends React.Component {
  render() {
    return (
      <div class="jumbotron text-xs-center">
        <h1 class="display-3">Thank You!</h1>

        <p class="lead">
          Your prosthetic has been reserved. <strong>Please check your email</strong> for more information.
        </p>

        <p>
          Having trouble? <a href="">Contact us</a>
        </p>
        <p class="lead">
          <a class="btn btn-outline-danger btn-sm" href="/" role="button">
            Continue to homepage
          </a>
        </p>
      </div>
    );
  }
}
export default ThankYou2;
