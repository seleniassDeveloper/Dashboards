import MetricsDashboard from "../gadgets/metrics/MetricsDashboard.jsx";
import AppointmentsList from "../gadgets/appointments/AppointmentsList.jsx";
import AIChatFloating from "../gadgets/ai/AIChatFloating.jsx";
import "./dashboard-workspace.css";

export default function DashboardWorkspace() {
  return (
    <div className="dashboard-workspace">
      <p className="dashboard-workspace__hint" role="status">
        Mismo proyecto: landing en <strong>/</strong>, panel en <strong>/app</strong>.
        Tras iniciar sesión (Google o correo), tu marca y preferencias se guardan
        en la nube (Firestore). Citas, métricas e IA usan la API definida en{" "}
        <code>VITE_API_URL</code> (en local, si no defines nada:{" "}
        <code>http://localhost:3001/api</code>; en Vercel, la URL de Render +{" "}
        <code>/api</code>).
      </p>

      <MetricsDashboard />

      <div className="dashboard-workspace__tableWrap">
        <AppointmentsList />
      </div>

      <AIChatFloating />
    </div>
  );
}
