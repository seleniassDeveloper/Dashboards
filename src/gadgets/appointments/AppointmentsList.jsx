import { useCallback, useEffect, useState } from "react";
import { useBrand } from "../brand/BrandProvider.jsx";
import { API_CONFIGURED } from "../../config/api.js";
import { apiFetch, formatApiError } from "../../lib/apiClient.js";

export default function AppointmentsList() {
  const { brand } = useBrand();
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  const loadAppointments = useCallback(async () => {
    if (!API_CONFIGURED) {
      setError("Configura VITE_API_URL en Vercel.");
      setAppointments([]);
      return;
    }
    setError(null);
    try {
      const data = await apiFetch("/appointments");
      setAppointments(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(formatApiError(err));
      setAppointments([]);
    }
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  async function updateStatus(id, current) {
    const next = prompt(
      "Nuevo estado: PENDING, CONFIRMED, CANCELLED o DONE",
      current
    );
    if (!next) return;

    try {
      await apiFetch(`/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      loadAppointments();
    } catch (err) {
      window.alert(formatApiError(err));
    }
  }

  async function deleteAppointment(id) {
    if (!window.confirm("¿Eliminar esta cita?")) return;

    try {
      await apiFetch(`/appointments/${id}`, { method: "DELETE" });
      loadAppointments();
    } catch (err) {
      window.alert(formatApiError(err));
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
      {error ? (
        <div
          style={{
            marginBottom: 16,
            padding: "12px 14px",
            borderRadius: 12,
            background: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#991b1b",
            fontSize: 14,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <span>{error}</span>
          <button
            type="button"
            onClick={() => loadAppointments()}
            style={{
              border: "none",
              background: "#991b1b",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: 8,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      ) : null}

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
          type="button"
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

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
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
                <Td>
                  {a.client?.firstName} {a.client?.lastName}
                </Td>
                <Td>{a.service?.name}</Td>
                <Td>
                  {a.worker?.firstName} {a.worker?.lastName}
                </Td>
                <Td>{new Date(a.startsAt).toLocaleString()}</Td>
                <Td>{a.status}</Td>
                <Td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      style={smallBtn}
                      onClick={() => updateStatus(a.id, a.status)}
                    >
                      Estado
                    </button>
                    <button
                      type="button"
                      style={dangerBtn}
                      onClick={() => deleteAppointment(a.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
