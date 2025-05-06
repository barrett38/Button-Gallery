import React, { useState } from "react";
import "./CopyToClipboardButton.css";

const CopyToClipboardButton = ({ textToCopy = "Copy me!", onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      if (onCopySuccess) onCopySuccess(); // Optional callback
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <button
      className={`copy-btn ${copied ? "copied" : ""}`}
      onClick={handleCopy}
      aria-label="Copy to clipboard"
    >
      {copied ? "✔ Copied!" : "📋 Copy"}
    </button>
  );
};

export default CopyToClipboardButton;
