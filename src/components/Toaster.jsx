import { useContext, useEffect } from "react";
import ToastCtx from "../context/toastContext";

export default function Toaster({ content }) {
  const { toast } = useContext(ToastCtx);

  useEffect(() => {
    setTimeout(() => toast(null), 5000);
  });

  if (!content) return null;

  return (
    <div className="toaster-container">
      <div className="toaster-container-header">
        <button onClick={() => toast(null)}> x </button>
      </div>
      {content}
    </div>
  );
}
