import React, { useState } from "react";
import { login, getSession } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { Toast } from "../../components/Toast";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toasts, setToasts] = useState([]);
  const navigate = useNavigate();

  function addToast(type, message){
    const id = Date.now().toString();
    setToasts(t => [...t, { id, type, message }]);
  }
  function removeToast(id){ setToasts(t => t.filter(x => x.id !== id)); }

  async function handleSubmit(e){
    e.preventDefault();
    setErrors({});
    if (!email || !password) {
      setErrors({ form: "Please enter email and password."});
      return;
    }
    try {
      login({ email, password });
      addToast("success", "Login successful. Redirecting...");
      navigate("/dashboard");
    } catch (err) {
      addToast("error", err.message || "Login failed");
    }
  }

  if (getSession()) {
    return <div className="card center"><p>You are already logged in. <Link to="/dashboard">Go to dashboard</Link></p></div>
  }

  return (
    <div style={{maxWidth:720, margin:"28px auto"}}>
      <div className="card">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" className="input" value={email} onChange={e=>setEmail(e.target.value)} type="email" />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input id="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
          </div>
          {errors.form && <div style={{color:"#ef4444", marginBottom:8}}>{errors.form}</div>}
          <div className="row">
            <button className="btn btn-primary" type="submit">Log In</button>
            <Link to="/auth/signup" style={{alignSelf:"center"}}>Create account</Link>
          </div>
        </form>
      </div>

      <div className="toast-container" aria-live="polite">
        {toasts.map(t => <Toast key={t.id} id={t.id} type={t.type} message={t.message} onClose={removeToast} />)}
      </div>
    </div>
  );
}