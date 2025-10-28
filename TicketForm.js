import React, { useEffect, useState } from "react";
import { VALID_STATUSES } from "../../utils/validators";

export default function TicketForm({ initial = null, onSubmit, onCancel }){
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [status, setStatus] = useState(initial?.status || "open");
  const [errors, setErrors] = useState({});

  useEffect(()=> {
    setTitle(initial?.title || "");
    setDescription(initial?.description || "");
    setStatus(initial?.status || "open");
    setErrors({});
  }, [initial]);

  function handleSubmit(e){
    e.preventDefault();
    const payload = { title: title.trim(), description: description.trim(), status };
    // Basic validation (more complex one is in validators)
    const errs = {};
    if (!payload.title) errs.title = "Title is required";
    if (!VALID_STATUSES.includes(payload.status)) errs.status = "Invalid status";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const res = onSubmit(payload);
    // if parent returns errors we show them inline
    if (res && res.errors) setErrors(res.errors);
    if (res && res.success && !initial) {
      setTitle(""); setDescription(""); setStatus("open");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input id="title" className="input" value={title} onChange={e=>setTitle(e.target.value)} />
        {errors.title && <div style={{color:"#ef4444"}}>{errors.title}</div>}
      </div>

      <div className="form-row">
        <label htmlFor="status">Status</label>
        <select id="status" className="input" value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        {errors.status && <div style={{color:"#ef4444"}}>{errors.status}</div>}
      </div>

      <div className="form-row">
        <label htmlFor="description">Description (optional)</label>
        <textarea id="description" className="input" rows="4" value={description} onChange={e=>setDescription(e.target.value)} />
        {errors.description && <div style={{color:"#ef4444"}}>{errors.description}</div>}
      </div>

      <div className="row">
        <button className="btn btn-primary" type="submit">Save</button>
        {onCancel && <button type="button" className="btn" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}