import React, { useState } from "react";
import { signup } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { Toast } from "../../components/Toast";

export default function Signup(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errors,setErrors] = useState({});
  const [toasts, setToasts] = useState([]);
  const navigate = useNavigate();

  function addToast(type, message){
    const id = Date.now().toString();
    setToasts(t => [...t, { id, type, message }]);
  }
  function removeToast(id){ setToasts(t => t.filter(x => x.id !== id)); }

  function handleSubmit(e){
    e.preventDefault();
    setErrors({});
    if (!name || !email || !password) {
      setErrors({ form: "All fields are required."});
      return;
    }
    try {
      signup({ name, email, password });
      addToast("success", "Account created. Please log in.");
      navigate("/auth/login");
    } catch(err){
      addToast("error", err.message || "Sign up failed");
    }
  }

  return (
    <div style={{maxWidth:720, margin:"28px auto"}}>
      <div className="card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input id="name" className="input" value={name} onChange={e=>setName(e.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" className="input" value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input id="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
          </div>
          {errors.form && <div style={{color:"#ef4444", marginBottom:8}}>{errors.form}</div>}
          <div className="row">
            <button className="btn btn-primary" type="submit">Create account</button>
            <Link to="/auth/login" style={{alignSelf:"center"}}>Already have an account?</Link>
          </div>
        </form>
      </div>

      <div className="toast-container" aria-live="polite">
        {toasts.map(t => <Toast key={t.id} id={t.id} type={t.type} message={t.message} onClose={removeToast} />)}
      </div>
    </div>
  );
}