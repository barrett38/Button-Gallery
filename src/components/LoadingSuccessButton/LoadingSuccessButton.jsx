import React, { useState } from "react";
import "./LoadingSuccessButton.css";
import handleClick from "./HandleClickSuccess";

const LoadingSuccessButton = ({ label = "Save", onClick }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <button
      className={`btn-load-success ${loading ? "loading" : ""} ${
        success ? "success" : ""
      }`}
      onClick={() => handleClick(setLoading, setSuccess, onClick)}
      disabled={loading || success}
    >
      {loading ? (
        <span className="spinner"></span>
      ) : success ? (
        <span className="checkmark">&#10003;</span>
      ) : (
        label
      )}
    </button>
  );
};

export default LoadingSuccessButton;
