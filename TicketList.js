import React from "react";

export default function TicketList({ tickets = [], onEdit, onDelete }) {
  if (!tickets.length)
    return <div className="muted">No tickets yet — create one!</div>;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {tickets.map((t) => (
        <div
          key={t.id}
          className="card"
          style={{
            padding: "12px 16px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h4>{t.title}</h4>
          <p>{t.description || "No description provided."}</p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color:
                  t.status === "open"
                    ? "green"
                    : t.status === "in_progress"
                    ? "orange"
                    : "gray",
                fontWeight: 600,
              }}
            >
              {t.status}
            </span>
          </p>

          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => onEdit(t)}
              style={{
                marginRight: 8,
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 10px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(t.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}