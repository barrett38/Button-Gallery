import React, { useState } from "react";
import "./LoadingSuccessButton.css";

const LoadingSuccessButton = ({ label = "Save", onClick }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setSuccess(false);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
    setSuccess(true);
    if (onClick) onClick();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <button
      className={`btn-load-success ${loading ? "loading" : ""} ${
        success ? "success" : ""
      }`}
      onClick={handleClick}
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
