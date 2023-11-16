"use client";
import React, { Component, useState } from "react";
import HeaderComponent from "../component/header-component";
import LoginModal from "../component/LoginModal-component";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showLoginModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showLoginModal: false });
  };

  handleLoginSuccess = () => {
    this.setState({ showLoginModal: false, isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <HeaderComponent onLoginClick={this.handleLoginClick}
        isLoggedIn={this.state.isLoggedIn}
        onLoginSuccess={this.handleLoginSuccess}
        onLogout={this.handleLogout} />
        <LoginModal
          onClose={this.handleCloseModal}
          showLoginModal={this.state.showLoginModal}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    );
  }
}

export default HeaderContainer;
