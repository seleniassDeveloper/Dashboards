import { Link } from "react-router-dom";

const products = [
  {
    title: "Gestión de citas",
    description:
      "Organiza reservas, estados, horarios y seguimiento de clientes desde una sola vista.",
    image: "/product-citas.png",
    tag: "Agenda",
  },
  {
    title: "Trabajadores y servicios",
    description:
      "Asigna servicios, define horarios y mantén el control operativo del equipo.",
    image: "/product-trabajadores.png",
    tag: "Operación",
  },
  {
    title: "Pagos y métricas",
    description:
      "Registra pagos, analiza ingresos y descubre qué áreas del negocio están funcionando mejor.",
    image: "/product-metricas.png",
    tag: "Análisis",
  },
];

export default function ProductCards() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <span style={styles.eyebrow}>Producto</span>
        <h2 style={styles.title}>Todo lo que necesitas para operar tu negocio</h2>
        <p style={styles.subtitle}>
          Un dashboard diseñado para centralizar agenda, clientes, equipo, pagos y métricas.
        </p>
      </div>

      <div style={styles.grid}>
        {products.map((item) => (
          <article key={item.title} style={styles.card}>
            <div style={styles.imageWrap}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <span style={styles.tag}>{item.tag}</span>
            </div>

            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={styles.actions}>
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
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    border: "1px solid #eadfce",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  },
  header: {
    marginBottom: 24,
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
  title: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.05,
    color: "#111827",
  },
  subtitle: {
    margin: "12px 0 0",
    color: "#6b7280",
    fontSize: 16,
    lineHeight: 1.5,
    maxWidth: 760,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  card: {
    border: "1px solid #ece7df",
    borderRadius: 22,
    overflow: "hidden",
    background: "#fffaf5",
    display: "flex",
    flexDirection: "column",
  },
  imageWrap: {
    position: "relative",
    background: "#f5efe7",
    minHeight: 220,
  },
  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    display: "block",
  },
  tag: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid #eadfce",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    color: "#8a5a20",
  },
  content: {
    padding: 20,
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.1,
    color: "#111827",
  },
  cardText: {
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: "#5b6470",
  },
  actions: {
    display: "flex",
    gap: 12,
    marginTop: 24,
    flexWrap: "wrap",
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
};