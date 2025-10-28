import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../utils/auth";

export default function Navbar(){
  const navigate = useNavigate();
  const session = getSession();

  function handleLogout(){
    clearSession();
    navigate("/");
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="inner">
        <div className="brand">
          <span className="logo" aria-hidden="true"></span>
          <div>
            <div style={{fontSize:14}}>Ticket Manager</div>
            <div style={{fontSize:12, color:"#475569"}}>Manage issues effortlessly</div>
          </div>
        </div>

        <div className="nav-links" role="menu">
          <Link to="/">Home</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/dashboard">Dashboard</Link>
          {!session ? (
            <>
              <Link to="/auth/login" className="btn">Log In</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn" aria-label="Logout">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}
