import React, { useState, useRef, useEffect } from "react";
import "./WhatsAppPopup.css";
import ananthImg from "../../assets/ananth.jpg";

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);
  const manualClose = useRef(false);

  const phone = "918951511111";
  const message =
    "Hello Sir, I am requesting an appointment. Please let me know the available slots.\n" +
    "Source: BranchSelector Website";

  const openChat = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleMouseEnter = () => {
    if (manualClose.current) return; // 👈 block reopen after manual close
    clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  const handleManualClose = () => {
    manualClose.current = true;
    setOpen(false);

    // allow hover again after cursor leaves area
    setTimeout(() => {
      manualClose.current = false;
    }, 300);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearTimeout(closeTimeout.current);
  }, []);

  return (
    <div
      className="wa-hover-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating WhatsApp Button */}
      <button className="wa-float" aria-label="Open WhatsApp chat">
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
            
            <button
              className="wa-close"
              onClick={handleManualClose}
              aria-label="Close WhatsApp popup"
            >
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
    </div>
  );
};

export default WhatsAppPopup;
