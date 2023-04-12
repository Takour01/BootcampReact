import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__left">
          <h3 className="footer__title">I'm footer</h3>
          <p>
            I'm footer I'm footer I'm footer I'm footer I'm footer I'm footer
            I'm footer I'm footer I'm footer I'm footer I'm footer I'm footer
            I'm footer I'm footer I'm footer I'm footer I'm footer I'm footer
            I'm footer I'm footer I'm footer I'm footer I'm footer I'm footer
            I'm footer I'm footer I'm footer I'm footer I'm footer I'm footer
            I'm footer{" "}
          </p>
        </div>
        <div className="footer__right">
          <p>I'm a Footer</p>
          <p>I'm a Footer</p>
          <p>I'm a Footer</p>
          <p>I'm a Footer</p>
        </div>
      </div>
    );
  }
}
