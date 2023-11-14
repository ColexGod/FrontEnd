import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img_online from "../../../public/img_online.png";
import CreateModal from "../component/inscrireModal-component";

const LoginModal = ({ onClose, showLoginModal, onCreateAccountClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = () => {
    const loginData={
      email:username,
      password:password,
    };
    fetch('http://localhost:8081/ProjetBack_end/ServletUserInfo/donneUser',{ mode: 'no-cors' }, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          console.log('Login successful');
          
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
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
