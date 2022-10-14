import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Toaster({ content, setContent }) {
  const [close, setClose] = useState(false);

  useEffect(() => {
    // The toaster disappears after 7 seconds
    setTimeout(() => setContent(null), 7000);
  });

  if (!content) return null;
  if (close) return null;

  return createPortal(
    <div className="toaster-container">
      <div className="toaster-container-header">
        <button onClick={() => setClose(true)}> x </button>
      </div>
      {content}
    </div>,
    document.getElementById("toaster-portal")
  );
}
