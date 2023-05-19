import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import Authmodal from "../components/Authmodal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
  };
  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} setShowModal={ setShowModal } showModal={ showModal } />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && <Authmodal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}

export default Home;
