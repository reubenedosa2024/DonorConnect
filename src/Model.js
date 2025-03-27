import { useState } from "react";
import "./App.css"; // Ensure styles are imported

function Model() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="home-page">
      <button onClick={() => setShowOverlay(true)}>Sign Up</button>

      {showOverlay && (
        <div className="overlay">
          <div className="modal">
            <h2>Sign Up</h2>
            <p>Enter your details...</p>
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
