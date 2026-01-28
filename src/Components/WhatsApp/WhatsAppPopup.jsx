import React, { useState, useRef, useEffect } from "react";
import "./WhatsAppPopup.css";
import ananthImg from "../../assets/ananth.jpg";
import whatsappImg from "../../assets/whatsapp.png";

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

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

  /* ---------- DESKTOP (HOVER) ---------- */
  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  /* ---------- MOBILE (CLICK) ---------- */
  const handleToggleClick = () => {
    if (!isTouchDevice) return;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeout.current);
  }, []);

  return (
    <>
      {isTouchDevice && open && (
        <div className="wa-mobile-overlay" onClick={handleClose} />
      )}

      <div
        className="wa-hover-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* WhatsApp Button */}
        <button
          className="wa-float"
          aria-label="Open WhatsApp chat"
          onClick={handleToggleClick}
        >
          <img src={whatsappImg} alt="WhatsApp" />
        </button>

        {/* Popup */}
        {open && (
          <div
            className="wa-popup"
            onClick={(e) => e.stopPropagation()}
          >
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
                onClick={handleClose}
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
                <img src={whatsappImg} alt="WhatsApp" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppPopup;
