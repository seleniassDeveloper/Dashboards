import { Link } from "react-router-dom";
import heroImage from "../assets/cpt.png";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">

        {/* TEXTO */}
        <div className="hero-text-block">
          <h1 className="hero-title">
            Organiza tu negocio,
            <br />
            clientes
            <br />
            y tareas en un solo
            <br />
            dashboard.
          </h1>

          <p className="hero-description">
            Gestiona citas, trabajadores, servicios, clientes y métricas
            desde una sola plataforma.
          </p>

          <div className="hero-buttons">
            <Link to="/app" className="hero-btn hero-btn-primary">
              Ver demo
            </Link>

            <a
              href="/manual_dashboard_completo_clientes.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              Descargar manual
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Vista del dashboard"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}