import React from "react";
import "./GlowingButton.css";

const buttonLabel = "Launch";

const GlowingButton = ({ label = `${buttonLabel}`, onClick }) => {
  return (
    <button className="glow-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default GlowingButton;
