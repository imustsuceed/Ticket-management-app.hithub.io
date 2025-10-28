import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // make sure this exists

export default function Home() {
  return (
    <main className="page-root" aria-labelledby="home-title">
      {/* Hero Section */}
      <header className="hero" role="region" aria-label="Hero Section">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 id="home-title" className="hero-title">
              Ticket Manager — Track, Manage, Resolve
            </h1>
            <p className="hero-sub">
              Lightweight ticketing for teams — create, assign status, and track
              resolutions with clarity and accessibility.
            </p>

            <div className="cta-row">
              <Link to="/auth/login" className="btn btn-ghost" aria-label="Log in">
                Log In
              </Link>
              <Link to="/tickets" className="btn btn-primary" aria-label="Get started">
                Get Started
              </Link>
            </div>
          </div>

          <aside className="hero-right" aria-hidden="true">
            <div className="card feature-card">
              <h3>Quick overview</h3>
              <p className="muted">
                Open, In Progress, and Closed tickets with easy CRUD operations.
              </p>
            </div>

            {/* Decorative Circles */}
            <div className="decor-circles">
              <span className="circle circle-lg" aria-hidden="true"></span>
              <span className="circle circle-sm" aria-hidden="true"></span>
            </div>
          </aside>
        </div>

        {/* Wave SVG at bottom of hero */}
        <div className="hero-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C220,140 440,0 720,40 C1000,80 1220,10 1440,60 L1440,120 L0,120 Z"
              fill="#f6f8fb"
            />
          </svg>
        </div>

        {/* Large Decorative Circles */}
        <div className="hero-decor" aria-hidden="true">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </header>

      {/* Feature Cards Section */}
      <section className="feature-cards">
        <div className="cards-container">
          <div className="card">
            <h3>Everything You Need</h3>
            <p>Powerful features to help you manage support tickets effectively.</p>
          </div>
          <div className="card">
            <h3>Lightning Fast</h3>
            <p>Create and manage tickets in seconds with our intuitive interface.</p>
          </div>
          <div className="card">
            <h3>Track Progress</h3>
            <p>Monitor ticket status and priority levels in real-time.</p>
          </div>
          <div className="card">
            <h3>Team Collaboration</h3>
            <p>Work together seamlessly with your support team.</p>
          </div>
          <div className="card">
            <h3>Save Time</h3>
            <p>Automate workflows and respond to customers faster.</p>
          </div>
          <div className="card call-to-action">
            <h3>Ready to Get Started?</h3>
            <p>
              Join thousands of teams already using TicketFlow to deliver
              exceptional support.
            </p>
            <button>Start Free Trial</button>
          </div>
        </div>
      </section>
    </main>
  );
}
