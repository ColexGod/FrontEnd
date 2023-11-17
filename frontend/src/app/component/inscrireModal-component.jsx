import React, { useState } from "react";
import Modal from "react-modal";
import img_online from "../../../public/img_online.png";

const CreateModal = ({ onClose, isOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleCreate = () => {
        const userData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          };
      
          // Call the function to create the account
          onCreateAccount(userData);
    };

    return (
        <Modal
          className="modal"
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Create Account Modal"
        >
          <h1 onClick={onClose}>X</h1>
          <div class="modal-content">
            <div class="img-content">
              <div class="image-modal">
              <img src={img_online.src} alt="Online" />
              </div>
              <div className="content">
                <h2>USER CREATE ACCOUNT</h2>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div class="modal-BTN">
                  <button class="create-BTN" onClick={handleCreate}>
                    CREATE ID
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      );
    };
    
    export default CreateModal;