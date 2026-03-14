import { useEffect, useState } from "react";
import { useBrand } from "../brand/BrandProvider.jsx";

const API = "http://localhost:3001/api";

export default function AppointmentsList() {
  const { brand } = useBrand();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    try {
      const res = await fetch(`${API}/appointments`);
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error("Error cargando citas", err);
    }
  }

  async function updateStatus(id, current) {
    const next = prompt(
      "Nuevo estado: PENDING, CONFIRMED, CANCELLED o DONE",
      current
    );
    if (!next) return;

    try {
      await fetch(`${API}/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      loadAppointments();
    } catch (err) {
      console.error("Error actualizando cita", err);
    }
  }

  async function deleteAppointment(id) {
    if (!window.confirm("¿Eliminar esta cita?")) return;

    try {
      await fetch(`${API}/appointments/${id}`, {
        method: "DELETE",
      });
      loadAppointments();
    } catch (err) {
      console.error("Error eliminando cita", err);
    }
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 24,
        border: "1px solid #ececec",
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 24 }}>Citas</h2>

        <button
          style={{
            background: brand?.textColor || "#111827",
            border: "none",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: 12,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Nueva
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <Th>Cliente</Th>
            <Th>Servicio</Th>
            <Th>Trabajador</Th>
            <Th>Fecha</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <Td>{a.client?.firstName} {a.client?.lastName}</Td>
              <Td>{a.service?.name}</Td>
              <Td>{a.worker?.firstName} {a.worker?.lastName}</Td>
              <Td>{new Date(a.startsAt).toLocaleString()}</Td>
              <Td>{a.status}</Td>
              <Td>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={smallBtn} onClick={() => updateStatus(a.id, a.status)}>
                    Estado
                  </button>
                  <button style={dangerBtn} onClick={() => deleteAppointment(a.id)}>
                    Eliminar
                  </button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "12px 10px",
        fontSize: 13,
        color: "#6b7280",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td
      style={{
        padding: "14px 10px",
        borderBottom: "1px solid #f1f5f9",
        fontSize: 14,
        color: "#111827",
      }}
    >
      {children}
    </td>
  );
}

const smallBtn = {
  background: "#111827",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "8px 10px",
  cursor: "pointer",
};

const dangerBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "8px 10px",
  cursor: "pointer",
};