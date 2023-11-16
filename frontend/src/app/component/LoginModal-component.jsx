import React, { useState } from "react";
import Modal from "react-modal";
import img_online from "../../../public/img_online.png";
import CreateModal from "../component/inscrireModal-component";
import axios from "axios";

const LoginModal = ({
  onClose,
  showLoginModal,
  onCreateAccountClick,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const loginData = {
      email: username,
      password: password,
    };

    axios({
      method: "post",
      url: "http://localhost:8081/ProjetBack_end/ServletUserInfo/donneUser",
      timeout: 4000,
      data: loginData,
    })
      .then((response) => {
        if (response.status === 200) {
          onLoginSuccess();
          onClose();
        } else {
          setBackendError(true);
          setErrorMessage("Email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error("timeout exceeded");
        setBackendError(true);
        setErrorMessage("Error connecting to the server.");
      });
  };

  const handleInscrire = () => {
    onCreateAccountClick();
  };

  const closeErrorModal = () => {
    setBackendError(false);
  };

  return (
    <Modal
      className="modal"
      isOpen={showLoginModal}
      onRequestClose={onClose}
      contentLabel="Login Modal"
    >
      <h1 onClick={onClose}>X</h1>
      <div className="modal-content">
        <div className="img-content">
          <div className="image-login">
            <img src={img_online.src} alt="Online" />
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
            {backendError && (
              <div className="modal-login-ERROR">
                <p className="error-message">{errorMessage}</p>
                <button onClick={closeErrorModal}>OK</button>
              </div>
            )}
            <div className="modal-login-BTN">
              <button className="login-BTN" onClick={handleLogin}>
                LOGIN
              </button>
              <button className="create-BTN" onClick={handleInscrire}>
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
