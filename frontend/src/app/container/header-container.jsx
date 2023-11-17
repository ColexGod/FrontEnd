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
<<<<<<< Updated upstream
        <HeaderComponent onLoginClick={this.handleLoginClick} onListFilmClick={this.handleListFilmClick}/>
=======
        <HeaderComponent
          onLoginClick={this.handleLoginClick}
          onListFilmClick={this.handleListFilmClick}
        />
>>>>>>> Stashed changes
        <LoginModal
          onClose={this.handleCloseModal}
          showLoginModal={this.state.showLoginModal}
        />
<<<<<<< Updated upstream
        {this.state.showListFilm ? (<ListFilm/>) : ''}
        
=======
        {this.state.showListFilm ? <ListFilm /> : ""}
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default HeaderContainer;
