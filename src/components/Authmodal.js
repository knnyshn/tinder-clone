import React from "react";

function Authmodal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

    return (
      
    <div className="auth-modal">
      <div onClick={handleClick}>ⓧ</div>
      AUTH MODAL
    </div>
  );
}

export default Authmodal;
