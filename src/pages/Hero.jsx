import { Link } from "react-router-dom";
import heroImage from "../assets/image.png";

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "72px 32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 40,
          alignItems: "center",
          background: "#f8f6f3",
          border: "1px solid #ead8c6",
          borderRadius: 32,
          padding: "56px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.06)",
        }}
      >
        {/* TEXTO */}
        <div>
          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 86px)",
              lineHeight: 0.95,
              margin: 0,
              fontWeight: 800,
              color: "#e79235",
              letterSpacing: "-0.04em",
            }}
          >
            Organiza tu negocio,
            <br />
            clientes
            <br />
            y tareas en un solo
            <br />
            dashboard.
          </h1>

          <p
            style={{
              marginTop: 28,
              fontSize: 20,
              lineHeight: 1.45,
              color: "#303030",
              maxWidth: 560,
            }}
          >
            Gestiona citas, trabajadores, servicios, clientes y métricas
            desde una sola plataforma.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 30,
            }}
          >
            <Link
              to="/app"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 24px",
                borderRadius: 14,
                background: "#111827",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Ver demo
            </Link>

            <a
              href="/manual_dashboard_completo_clientes.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 24px",
                borderRadius: 14,
                background: "#fff",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #d1d5db",
              }}
            >
              Descargar manual
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div>
          <img
            src={heroImage}
            alt="Vista del dashboard"
            style={{
              width: "100%",
              display: "block",
              borderRadius: 24,
              boxShadow: "0 28px 60px rgba(0,0,0,0.10)",
            }}
          />
        </div>
      </div>
    </section>
  );
}