import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Toaster({ content, setContent }) {
  useEffect(() => {
    // The toaster disappears after 7 seconds
    setTimeout(() => setContent(null), 7000);
  });

  if (!content) return null;

  return createPortal(
    <div className="toaster-container">
      <div className="toaster-container-header">
        <button> x </button>
      </div>
      {content}
    </div>,
    document.getElementById("toaster-portal")
  );
}
