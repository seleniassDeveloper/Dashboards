import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import FeatureRow from "./FeatureRow.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Pricing from "./Pricing.jsx";
import ProductCards from "./ProductCards.jsx";
import "../styles/scrollReveal.css";

// imágenes
import portadaImg from "../assets/imageini.png";
// import dashboardImg from "../assets/imageni1.png";
// import metricasImg from "../assets/img1secc2.png";
// import gestionImg from "../assets/seccion3.png";

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
              Esta vista resume cómo se usa la aplicación en la práctica: primero
              ves el estado general del negocio, luego gestionas citas y finalmente
              revisas calendario, pagos y rendimiento sin salir del mismo sistema.
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
                    Filtra citas, cambia estados, edita registros y mantén el flujo
                    de trabajo ordenado.
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

        <section className="reveal" style={styles.imageSection}>
          <div style={styles.imageCardLarge}>
            <div style={styles.imageText}>
              <span style={styles.cardTag}>Visualización</span>
              <h3 style={styles.cardTitle}>Tu información convertida en decisiones</h3>
              <p style={styles.cardText}>
                Usa métricas, estado de tareas, rendimiento y datos del negocio
                en una sola interfaz visual.
              </p>
            </div>
            <img
              // src={dashboardImg}
              alt="Dashboard con métricas"
              style={styles.sectionImage}
            />
          </div>
        </section>

        <section className="reveal" style={styles.gridSection}>
          <article style={styles.infoCard}>
            <img
              // src={metricasImg}
              alt="Métricas procesadas por IA"
              style={styles.gridImage}
            />
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Métricas inteligentes</h3>
              <p style={styles.infoText}>
                El usuario escribe qué necesita y la IA interpreta la petición
                para devolver resultados útiles dentro del dashboard.
              </p>
            </div>
          </article>

          <article style={styles.infoCard}>
            <img
              // src={gestionImg}
              alt="Gestión operativa del negocio"
              style={styles.gridImage}
            />
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Gestión operativa</h3>
              <p style={styles.infoText}>
                Controla citas, personal, clientes, pagos y servicios desde una
                misma experiencia.
              </p>
            </div>
          </article>
        </section>

        <section className="reveal">
          <HowItWorks />
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

  heroBanner: {
    background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
    border: "1px solid #eadfce",
    borderRadius: 32,
    padding: 32,
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 28,
    alignItems: "center",
  },

  heroBannerText: {
    display: "grid",
    gap: 16,
  },

  badge: {
    display: "inline-flex",
    width: "fit-content",
    padding: "8px 14px",
    borderRadius: 999,
    background: "#111827",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0.3,
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(2rem, 4vw, 3.2rem)",
    lineHeight: 1.05,
    color: "#111827",
  },

  heroText: {
    margin: 0,
    color: "#5b6470",
    fontSize: 17,
    lineHeight: 1.6,
    maxWidth: 560,
  },

  heroBannerImageWrap: {
    background: "#fff",
    borderRadius: 24,
    padding: 12,
    border: "1px solid #ece7df",
    boxShadow: "0 18px 50px rgba(17,24,39,0.08)",
  },

  heroBannerImage: {
    width: "100%",
    height: 380,
    objectFit: "cover",
    borderRadius: 18,
    display: "block",
  },

  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 4,
  },

  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: 14,
    background: "#111827",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },

  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: 14,
    background: "#fff",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #d6d9df",
  },

  imageSection: {
    display: "grid",
  },

  imageCardLarge: {
    background: "#ffffff",
    border: "1px solid #eadfce",
    borderRadius: 28,
    padding: 24,
    display: "grid",
    gridTemplateColumns: "0.95fr 1.05fr",
    gap: 22,
    alignItems: "center",
  },

  imageText: {
    display: "grid",
    gap: 12,
  },

  cardTag: {
    fontSize: 13,
    fontWeight: 700,
    color: "#b45309",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  cardTitle: {
    margin: 0,
    fontSize: 32,
    lineHeight: 1.1,
    color: "#1f2937",
  },

  cardText: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.7,
    color: "#5b6470",
  },

  sectionImage: {
    width: "100%",
    height: 360,
    objectFit: "cover",
    borderRadius: 22,
    display: "block",
  },

  gridSection: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 20,
  },

  infoCard: {
    background: "#fff",
    border: "1px solid #eadfce",
    borderRadius: 24,
    overflow: "hidden",
    display: "grid",
  },

  gridImage: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    display: "block",
  },

  infoContent: {
    padding: 22,
  },

  infoTitle: {
    margin: "0 0 10px",
    fontSize: 24,
    color: "#111827",
  },

  infoText: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.7,
    color: "#5b6470",
  },
};