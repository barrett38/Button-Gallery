export const handleCopy = (textToCopy, setCopied, onCopySuccess) => {
  navigator.clipboard.writeText(textToCopy).then(() => {
    setCopied(true);
    if (onCopySuccess) onCopySuccess(); // Optional callback
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  });
};
