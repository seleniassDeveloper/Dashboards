import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import FeatureRow from "./FeatureRow.jsx";
import Pricing from "./Pricing.jsx";
import ProductCards from "./ProductCards.jsx";
import "../styles/scrollReveal.css";

import portadaImg from "../assets/imageini.png";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="page" style={styles.page}>
      <main className="stack" style={styles.main}>
        <section className="reveal">
          <Hero />
        </section>

        <section className="reveal landing-explainer">
          <div className="landing-explainer__intro">
            <span className="landing-explainer__eyebrow">Cómo funciona</span>

            <h2 className="landing-explainer__title">
              Entiende el dashboard en menos de un minuto
            </h2>

            <p className="landing-explainer__lead">
              Todo ocurre en una sola plataforma: entiendes el estado general del
              negocio, gestionas la operación diaria y revisas calendario, pagos
              y rendimiento sin cambiar de vista.
            </p>
          </div>

          <div className="landing-explainer__layout">
            <div className="landing-explainer__visual">
              <div className="landing-explainer__imageFrame">
                <img
                  src={portadaImg}
                  alt="Vista principal del dashboard"
                  className="landing-explainer__image"
                />
              </div>

              <div className="landing-explainer__note landing-explainer__note--top">
                <span>Vista rápida</span>
                <strong>Todo conectado</strong>
                <small>Citas, métricas y control diario</small>
              </div>

              <div className="landing-explainer__note landing-explainer__note--bottom">
                <span>En una sola vista</span>
                <strong>Operación más clara</strong>
                <small>Menos pasos, menos desorden</small>
              </div>
            </div>

            <div className="landing-explainer__content">
              <div className="landing-explainer__steps">
                <article className="landing-explainer__step">
                  <div className="landing-explainer__stepNumber">1</div>
                  <div>
                    <h3>Revisa el panorama general</h3>
                    <p>
                      Consulta métricas, gráficos y estados para entender qué está
                      pasando hoy en tu negocio.
                    </p>
                  </div>
                </article>

                <article className="landing-explainer__step">
                  <div className="landing-explainer__stepNumber">2</div>
                  <div>
                    <h3>Gestiona la operación diaria</h3>
                    <p>
                      Filtra citas, cambia estados, edita registros y mantén el
                      flujo de trabajo ordenado.
                    </p>
                  </div>
                </article>

                <article className="landing-explainer__step">
                  <div className="landing-explainer__stepNumber">3</div>
                  <div>
                    <h3>Decide con datos reales</h3>
                    <p>
                      Usa calendario, pagos y rentabilidad para detectar cargas,
                      ingresos y oportunidades de mejora.
                    </p>
                  </div>
                </article>
              </div>

              <div className="landing-explainer__miniGrid">
                <div className="landing-explainer__miniCard">
                  <strong>Panel principal</strong>
                  <span>Métricas, gráficos y visión general</span>
                </div>

                <div className="landing-explainer__miniCard">
                  <strong>Lista de citas</strong>
                  <span>Estados, filtros y seguimiento diario</span>
                </div>

                <div className="landing-explainer__miniCard">
                  <strong>Calendario</strong>
                  <span>Organización clara de horarios</span>
                </div>

                <div className="landing-explainer__miniCard">
                  <strong>Pagos y rentabilidad</strong>
                  <span>Ingresos, ticket promedio y cierre</span>
                </div>
              </div>

              <div className="landing-explainer__actions">
                <Link
                  to="/app"
                  className="landing-explainer__btn landing-explainer__btn--primary"
                >
                  Ver demo
                </Link>

                <a
                  href="/manual_dashboard_completo_clientes.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="landing-explainer__btn landing-explainer__btn--secondary"
                >
                  Descargar manual
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal">
          <ProductCards />
        </section>

        <section className="reveal">
          <FeatureRow />
        </section>

        <section className="reveal">
          <Pricing />
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    background: "#f7f7f5",
    minHeight: "100vh",
  },

  main: {
    width: "min(1280px, calc(100% - 32px))",
    margin: "0 auto",
    padding: "24px 0 72px",
    display: "grid",
    gap: 28,
  },
};