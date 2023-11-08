"use client";
import React, { Component } from "react";
import FooterComponent from "../component/FooterComponent";

class FooterContainer extends Component {
  render() {
    const phoneNumber = "415-456-7800";
    const email = "420.films@gmail.com";

    return (
      <div>
        <FooterComponent phoneNumber={phoneNumber} email={email} />
      </div>
    );
  }
}

export default FooterContainer;
