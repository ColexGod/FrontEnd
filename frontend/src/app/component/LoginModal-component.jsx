import React, { useState } from "react";
import Modal from "react-modal";
import img_online from "../../../public/img_online.png";
import CreateModal from "../component/inscrireModal-component";

const LoginModal = ({ onClose, showLoginModal, onCreateAccountClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    // You can add your authentication logic here
    // For now, let's just log a message
    console.log("Login clicked");
  };

  // const handleInscrire = () => {
  //   // Add your Inscrire logic here
  //   // You can add your authentication logic here
  //   // For now, let's just log a message
  //   console.log("Inscrire clicked");
  // };
  const handleInscrire = () => {
    onCreateAccountClick();
  };

  return (
    <Modal
      className="modal"
      isOpen={showLoginModal}
      onRequestClose={onClose}
      contentLabel="Login Modal"
    >
      <h1 onClick={onClose}>X</h1>
      <div class="modal-content">
        <div class="img-content">
          <div class="image-login">
            <img src={img_online.src} />
          </div>
          <div className="content">
            <h2>USER LOGIN</h2>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="modal-login-BTN">
              <button class="login-BTN" onClick={handleLogin}>
                LOGIN
              </button>
              <button class="create-BTN" onClick={handleInscrire}>
                CREATE ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
