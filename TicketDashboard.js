import React, { useEffect, useState } from "react";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import { readData, writeData } from "../../utils/storage";
import { v4 as uuidv4 } from "uuid";
import { validateTicket } from "../../utils/validators";
import { Toast } from "../../components/Toast";

export default function TicketDashboard(){
  const [tickets, setTickets] = useState([]);
  const [editing, setEditing] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(()=>{
    const data = readData();
    setTickets(data.tickets || []);
  },[]);

  function persist(newTickets){
    const data = readData();
    data.tickets = newTickets;
    writeData(data);
    setTickets(newTickets);
  }

  function addToast(type, message){
    const id = Date.now().toString();
    setToasts(t=>[...t,{id,type,message}]);
  }
  function removeToast(id){ setToasts(t=>t.filter(x=>x.id !== id)); }

  function handleCreate(payload){
    const err = validateTicket(payload);
    if (Object.keys(err).length) {
      addToast("error", Object.values(err).join(" "));
      return { success:false, errors: err };
    }
    const newTicket = { id: uuidv4(), ...payload, createdAt: Date.now() };
    const newTickets = [newTicket, ...tickets];
    persist(newTickets);
    addToast("success", "Ticket created");
    return { success:true };
  }

  function handleUpdate(id, payload){
    const err = validateTicket(payload);
    if (Object.keys(err).length) {
      addToast("error", Object.values(err).join(" "));
      return { success:false, errors: err };
    }
    const newTickets = tickets.map(t => t.id === id ? { ...t, ...payload } : t);
    persist(newTickets);
    addToast("success", "Ticket updated");
    setEditing(null);
    return { success:true };
  }

  function handleDelete(id){
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Are you sure you want to delete this ticket?")) return;
    const newTickets = tickets.filter(t=>t.id !== id);
    persist(newTickets);
    addToast("success", "Ticket deleted");
  }

  return (
    <div style={{maxWidth:1100, margin:"18px auto"}} className="grid">
      <div className="card">
        <h3>Create Ticket</h3>
        <TicketForm onSubmit={handleCreate} />
      </div>

      <div className="card">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h3>Tickets</h3>
        </div>

        <TicketList tickets={tickets} onEdit={(t)=>setEditing(t)} onDelete={handleDelete} />
      </div>

      {editing && (
        <div className="card" style={{marginTop:12}}>
          <h3>Edit ticket</h3>
          <TicketForm initial={editing} onSubmit={(p)=>handleUpdate(editing.id, p)} onCancel={()=>setEditing(null)} />
        </div>
      )}

      <div className="toast-container" aria-live="polite">
        {toasts.map(t => <Toast key={t.id} id={t.id} type={t.type} message={t.message} onClose={removeToast} />)}
      </div>
    </div>
  );
}