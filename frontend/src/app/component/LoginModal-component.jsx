import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img_online from "../../../public/img_online.png";
import CreateModal from "../component/inscrireModal-component";
import axios from "axios";

const LoginModal = ({ onClose, showLoginModal, onCreateAccountClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = () => {
    const loginData={
      email:username,
      password:password,
    };
    axios({
      method: 'post',
      url: 'http://localhost:8888/ProjetBack_end/ServletUserInfo/donneUser',
      timeout: 4000,   
      data: {
        email: 'KristinRWarren54@gmail.com',
        password: 'ohnic7Mei'
      }
    })
    .then(response => {/* handle the response */})
    .catch(error => console.error('timeout exceeded'))
  };

  
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
              type="email"
              placeholder="Email"
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
