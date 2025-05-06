import React, { useState } from "react";
import { handleCopy } from "./HandleCopy";
import "./CopyToClipboardButton.css";

const CopyToClipboardButton = ({ textToCopy = "Copy me!", onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className={`copy-btn ${copied ? "copied" : ""}`}
      onClick={() => handleCopy(textToCopy, setCopied, onCopySuccess)}
      aria-label="Copy to clipboard"
    >
      {copied ? "✔ Copied!" : "📋 Copy"}
    </button>
  );
};

export default CopyToClipboardButton;
