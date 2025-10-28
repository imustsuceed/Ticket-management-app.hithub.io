import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <h1>Welcome to Your Ticket Dashboard</h1>
        <p>Manage, track, and resolve tickets efficiently with real-time insights.</p>

        {/* Wavy SVG background */}
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,192C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats-section">
        <div className="stat-card open" tabIndex="0">
          <h2>Open Tickets</h2>
          <p>12</p>
        </div>

        <div className="stat-card in-progress" tabIndex="0">
          <h2>In Progress</h2>
          <p>5</p>
        </div>

        <div className="stat-card closed" tabIndex="0">
          <h2>Closed</h2>
          <p>23</p>
        </div>
      </section>
    </div>
  );
}