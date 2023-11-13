"use client";
import React, { Component, useState } from "react";
import HeaderComponent from "../component/header-component";
import LoginModal from "../component/LoginModal-component";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showLoginModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showLoginModal: false });
  };

  render() {
    return (
      <div>
        <HeaderComponent onLoginClick={this.handleLoginClick} />
        <LoginModal
          onClose={this.handleCloseModal}
          showLoginModal={this.state.showLoginModal}
        />
      </div>
    );
  }
}

export default HeaderContainer;
