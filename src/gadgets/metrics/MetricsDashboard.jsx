import { useEffect, useState } from "react";

const API = "http://localhost:3001/api";

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState({
    todayAppointments: 0,
    weekAppointments: 0,
    cancellations: 0,
    topService: "-",
  });

  useEffect(() => {
    async function loadMetrics() {
      try {
        const res = await fetch(`${API}/metrics`);
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        console.error("Error cargando métricas", err);
      }
    }

    loadMetrics();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
      }}
    >
      <MetricCard label="Citas hoy" value={metrics.todayAppointments} />
      <MetricCard label="Citas esta semana" value={metrics.weekAppointments} />
      <MetricCard label="Cancelaciones" value={metrics.cancellations} />
      <MetricCard label="Servicio más pedido" value={metrics.topService} />
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        border: "1px solid #ececec",
      }}
    >
      <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>{value}</div>
    </div>
  );
}