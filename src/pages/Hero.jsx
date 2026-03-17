import { Link } from "react-router-dom";
import SEC4 from "../assets/imageseccion4.png";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero hero--animated">
      <div className="hero-card">
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />

        <div className="hero-text-block hero-enter-left">
          <span className="hero-kicker">Dashboard + IA</span>

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



<div className="hero-buttons hero-enter-up">
  <Link to="/app" className="hero-btn hero-btn-primary">
    Iniciar prueba
  </Link>

  <a
    href="/manual_dashboard_completo_clientes.pdf"
    target="_blank"
    rel="noreferrer"
    className="hero-btn hero-btn-secondary"
  >
    Ver cómo funciona
  </a>
</div>




        </div>

        <div className="hero-image-container hero-enter-right">
          <div className="hero-image-frame hero-float-soft">
            <img
              src={SEC4}
              alt="Vista del dashboard"
              className="hero-image"
            />
          </div>

          <div className="hero-mini-card hero-mini-card--top">
            <span>Métricas</span>
            <strong>Estado en tiempo real</strong>
          </div>

          <div className="hero-mini-card hero-mini-card--bottom">
            <span>Calendario</span>
            <strong>Control visual del día</strong>
          </div>
        </div>
      </div>
    </section>
  );
}