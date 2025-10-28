import React, { useEffect } from "react";

export function Toast({ id, type = "success", message, onClose }) {
  useEffect(() => {
    const t = setTimeout(() => onClose(id), 4000);
    return () => clearTimeout(t);
  }, [id, onClose]);

  return (
    <div role="status" aria-live="polite" className={`toast ${type}`}>
      {message}
    </div>
  );
}

/* Small toast manager hook for the app pages: each page can maintain its own toasts state */