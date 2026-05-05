import "../auth/auth.css";

export default function RouteFallback() {
  return (
    <div
      className="auth-gate"
      style={{ minHeight: "100dvh" }}
      role="status"
      aria-live="polite"
    >
      <div className="auth-card" style={{ textAlign: "center", maxWidth: 320 }}>
        <div className="auth-spinner" />
        <p className="auth-card__sub" style={{ margin: 0 }}>
          Cargando aplicación…
        </p>
      </div>
    </div>
  );
}
