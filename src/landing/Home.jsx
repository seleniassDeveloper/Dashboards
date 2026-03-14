import { useEffect } from "react";
import Hero from "../pages/Hero.jsx";
import FeatureRow from "./FeatureRow.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Pricing from "./Pricing.jsx";
import ProductCards from "./ProductCards.jsx";
import { Link } from "react-router-dom";
import "../styles/scrollReveal.css";

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

        <section className="reveal" style={styles.ctaTop}>
          <div style={styles.ctaBox}>
            <div>
              <h2 style={styles.ctaTitle}>Empieza a gestionar tu negocio mejor</h2>
              <p style={styles.ctaText}>
                Organiza citas, clientes, servicios, pagos y métricas en un solo lugar.
              </p>
            </div>

            <div style={styles.ctaActions}>
              <Link to="/app" style={styles.primaryBtn}>
                Ver demo
              </Link>

              <a
                href="/manual-dashboard.pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryBtn}
              >
                Descargar manual
              </a>
            </div>
          </div>
        </section>

        <section className="grid2 reveal" style={styles.grid2}>
          <ProductCards />
          <HowItWorks />
        </section>

        <section className="reveal">
          <FeatureRow />
        </section>

        <section className="reveal" style={styles.manualSection}>
          <div style={styles.manualCard}>
            <div>
              <span style={styles.eyebrow}>Guía completa</span>
              <h3 style={styles.manualTitle}>Manual de uso para clientes</h3>
              <p style={styles.manualText}>
                Explica paso a paso cómo personalizar el sistema, crear servicios,
                registrar trabajadores, gestionar citas, estados, pagos y métricas.
              </p>
            </div>

            <div style={styles.manualActions}>
              <a
                href="/manual-dashboard.pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.primaryBtn}
              >
                Abrir manual
              </a>
            </div>
          </div>
        </section>

        <section className="reveal">
          <Pricing />
        </section>

        <section className="reveal" style={styles.bottomCta}>
          <div style={styles.bottomCard}>
            <h3 style={styles.bottomTitle}>¿Quieres ver el dashboard funcionando?</h3>
            <p style={styles.bottomText}>
              Entra a la demo y explora cómo se ven las citas, métricas, branding y asistente IA.
            </p>

            <div style={styles.ctaActions}>
              <Link to="/app" style={styles.primaryBtn}>
                Ir a la app
              </Link>

              <a
                href="/manual-dashboard.pdf"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryBtn}
              >
                Ver manual
              </a>
            </div>
          </div>
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
  ctaTop: {
    marginTop: 4,
  },
  ctaBox: {
    background: "#fff",
    border: "1px solid #eadfce",
    borderRadius: 28,
    padding: 28,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    flexWrap: "wrap",
  },
  ctaTitle: {
    margin: 0,
    fontSize: 30,
    lineHeight: 1.05,
    color: "#1f2937",
  },
  ctaText: {
    margin: "10px 0 0",
    color: "#5b6470",
    fontSize: 16,
    maxWidth: 700,
  },
  ctaActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  manualSection: {
    marginTop: 4,
  },
  manualCard: {
    background: "linear-gradient(135deg, #fff8ef, #ffffff)",
    border: "1px solid #f0dfc8",
    borderRadius: 28,
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#d4822f",
    marginBottom: 8,
  },
  manualTitle: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.08,
    color: "#1f2937",
  },
  manualText: {
    margin: "10px 0 0",
    maxWidth: 740,
    color: "#5b6470",
    fontSize: 16,
    lineHeight: 1.5,
  },
  manualActions: {
    display: "flex",
    alignItems: "center",
  },
  bottomCta: {
    marginTop: 4,
  },
  bottomCard: {
    background: "#111827",
    color: "#fff",
    borderRadius: 28,
    padding: 32,
    textAlign: "center",
  },
  bottomTitle: {
    margin: 0,
    fontSize: 30,
    lineHeight: 1.05,
  },
  bottomText: {
    margin: "12px auto 0",
    maxWidth: 760,
    color: "rgba(255,255,255,0.78)",
    fontSize: 16,
    lineHeight: 1.5,
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
    border: "none",
    cursor: "pointer",
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
    cursor: "pointer",
  },
};