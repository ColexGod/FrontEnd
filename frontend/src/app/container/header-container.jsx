"use client";
import React, { Component, useState } from "react";
import HeaderComponent from "../component/header-component";
import LoginModal from "../component/LoginModal-component";
import ListFilm from "../component/list-film-component";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showListFilm: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showLoginModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showLoginModal: false });
  };

  handleListFilmClick = () => {
    this.setState({ showListFilm: true });
  };

  handleCloseListFilm = () => {
    this.setState({ showListFilm: true });
  };

  render() {
    return (
      <div>
        <HeaderComponent onLoginClick={this.handleLoginClick} onListFilmClick={this.handleListFilmClick}/>
        <LoginModal
          onClose={this.handleCloseModal}
          showLoginModal={this.state.showLoginModal}
        />
        {this.state.showListFilm ? (<ListFilm/>) : ''}
        
      </div>
    );
  }
}

export default HeaderContainer;
