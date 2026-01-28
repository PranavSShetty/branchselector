import React, { useState } from "react";
import "./WhatsAppPopup.css";
import ananthImg from "../../assets/ananth.jpg";

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);

  const phone = "918951511111";
  const message =
  "Hello Sir, this is [Your Name] contacting you via the BranchSelector website with an inquiry.";

  const openChat = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button className="wa-float" onClick={() => setOpen(true)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </button>

      {/* Popup */}
      {open && (
        <div className="wa-popup">
          <div className="wa-header">
            <div className="wa-user">
              <img src={ananthImg} alt="Dr. Ananth Prabhu" />
              <div>
                <strong>Dr. Ananth Prabhu</strong>
                <span>
                  <i></i> Online
                </span>
              </div>
            </div>
            <button className="wa-close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="wa-body">
            <div className="wa-bubble">
              Hi there 👋 <br />
              <br />
              How can I help you?
            </div>
          </div>

          <div className="wa-footer">
            <button onClick={openChat}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt=""
              />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;
