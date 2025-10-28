import React from "react";

function statusClass(status){
  if (status === "open") return "status open";
  if (status === "in_progress") return "status in_progress";
  return "status closed";
}

export default function TicketItem({ ticket, onEdit, onDelete }){
  return (
    <div className="ticket-card card">
      <div className="meta">
        <div style={{display:"flex", flexDirection:"column"}}>
          <strong>{ticket.title}</strong>
          <div className="muted" style={{fontSize:12}}>{new Date(ticket.createdAt).toLocaleString()}</div>
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <span className={statusClass(ticket.status)}>{ticket.status.replace("_"," ")}</span>
          <button className="btn" onClick={onEdit}>Edit</button>
          <button className="btn" onClick={onDelete}>Delete</button>
        </div>
      </div>
      {ticket.description && <div className="muted">{ticket.description}</div>}
    </div>
  );
}