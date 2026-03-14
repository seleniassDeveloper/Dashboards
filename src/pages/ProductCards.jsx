import { Link } from "react-router-dom";

export default function ProductCards() {
  return (
    <section
      style={{
        display: "grid",
        gap: 24,
      }}
    >
      <article
        style={{
          background: "#fbf8f5",
          borderRadius: 28,
          padding: 24,
          border: "1px solid #eee1d2",
        }}
      >
        <img
          src="/dashboard-product-card.png"
          alt="Dashboard emprendedor"
          style={{
            width: "100%",
            borderRadius: 20,
            display: "block",
            marginBottom: 18,
          }}
        />

        <h3 style={{ margin: 0, fontSize: 36, lineHeight: 1.05 }}>
          Dashboard Emprendedor
        </h3>

        <p style={{ color: "#555", marginTop: 12 }}>
          Una solución visual para organizar citas, clientes, trabajadores, pagos
          y métricas de negocio.
        </p>

        <div style={{ marginTop: 18 }}>
          <Link
            to="/app"
            style={{
              display: "inline-flex",
              padding: "12px 18px",
              borderRadius: 12,
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Abrir demo
          </Link>
        </div>
      </article>
    </section>
  );
}