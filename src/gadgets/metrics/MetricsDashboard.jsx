import { useCallback, useEffect, useState } from "react";
import { API_CONFIGURED } from "../../config/api.js";
import { apiFetch, formatApiError } from "../../lib/apiClient.js";

const emptyMetrics = {
  todayAppointments: 0,
  weekAppointments: 0,
  cancellations: 0,
  topService: "-",
};

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState(emptyMetrics);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMetrics = useCallback(async () => {
    if (!API_CONFIGURED) {
      setError("Configura VITE_API_URL en Vercel.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch("/metrics");
      setMetrics({ ...emptyMetrics, ...data });
    } catch (err) {
      setError(formatApiError(err));
      setMetrics(emptyMetrics);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMetrics();
  }, [loadMetrics]);

  return (
    <div>
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
            onClick={() => loadMetrics()}
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 20,
          opacity: loading ? 0.6 : 1,
        }}
      >
        <MetricCard label="Citas hoy" value={metrics.todayAppointments} />
        <MetricCard label="Citas esta semana" value={metrics.weekAppointments} />
        <MetricCard label="Cancelaciones" value={metrics.cancellations} />
        <MetricCard label="Servicio más pedido" value={metrics.topService} />
      </div>
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
