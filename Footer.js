import React from "react";

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="inner">
        <div className="muted">© {new Date().getFullYear()} Ticket Manager — Built for HNG Task</div>
        <div className="muted">Made with ❤️ — Accessibility friendly</div>
      </div>
    </footer>
  );
}