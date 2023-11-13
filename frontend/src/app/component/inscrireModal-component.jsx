// import React, { useState } from "react";
// import Modal from "react-modal";
// import img_online from "../../../public/img_online.svg";

// const CreateModal = ({ onClose, showLoginModal }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleCreate = () => {
//       // Add your login logic here
//       // You can add your authentication logic here
//       // For now, let's just log a message
//       console.log("Create clicked");
//     };

//     return (
//         <Modal
//           className="modal"
//           isOpen={showLoginModal}
//           onRequestClose={onClose}
//           contentLabel="Create Modal"
//         >
//           <h1 onClick={onClose}>X</h1>
//           <div class="modalCreate-content">
//             <div class="imgCreate-content">
//               <div class="image-create">
//                 <img src={img_online.src}/>
//               </div>
//               <div className="content-create">
//                 <h2>USER CREATE ACCOUNT</h2>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div class="modal-create-BTN">
//                   <button class="create-BTN" onClick={handleCreate}>
//                     CREATE ID
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       );
//     };
    
//     export default CreateModal;