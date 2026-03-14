export default function Pricing() {
  const plans = [
    {
      name: "Individual",
      price: "$5",
      subtitle: "Ideal para una persona",
      features: [
        "Dashboard listo para usar",
        "Gestión de citas",
        "Clientes y servicios",
        "Métricas básicas",
      ],
      highlighted: false,
      cta: "Empezar",
    },
    {
      name: "Profesional",
      price: "$7",
      subtitle: "La opción más completa",
      features: [
        "Todo lo del plan Individual",
        "Gestión de trabajadores",
        "Más personalización de marca",
        "Asistente IA",
      ],
      highlighted: true,
      cta: "Elegir plan",
    },
    {
      name: "Team",
      price: "$10",
      subtitle: "Pensado para equipos",
      features: [
        "Todo lo del plan Profesional",
        "Uso para varios miembros",
        "Mayor control operativo",
        "Escalable para negocios en crecimiento",
      ],
      highlighted: false,
      cta: "Contactar",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <span style={styles.eyebrow}>Planes</span>
        <h2 style={styles.title}>Elige tu plan</h2>
        <p style={styles.subtitle}>
          Empieza con un dashboard listo para usar y elige la opción que mejor se adapte a tu negocio.
        </p>
      </div>

      <div style={styles.grid}>
        {plans.map((plan) => (
          <article
            key={plan.name}
            style={{
              ...styles.card,
              ...(plan.highlighted ? styles.cardHighlighted : {}),
            }}
          >
            {plan.highlighted ? <div style={styles.badge}>Más elegido</div> : null}

            <div style={styles.planName}>{plan.name}</div>
            <div style={styles.price}>{plan.price}</div>
            <div style={styles.planSubtitle}>{plan.subtitle}</div>

            <ul style={styles.list}>
              {plan.features.map((feature) => (
                <li key={feature} style={styles.listItem}>
                  <span style={styles.check}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              style={{
                ...styles.button,
                ...(plan.highlighted ? styles.buttonPrimary : styles.buttonSecondary),
              }}
            >
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "12px 0 0",
  },
  header: {
    textAlign: "center",
    marginBottom: 28,
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
    fontSize: 42,
    lineHeight: 1,
    color: "#111827",
  },
  subtitle: {
    margin: "12px auto 0",
    maxWidth: 760,
    color: "#6b7280",
    fontSize: 16,
    lineHeight: 1.5,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
  },
  card: {
    position: "relative",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
  },
  cardHighlighted: {
    border: "1px solid #e8b171",
    boxShadow: "0 16px 36px rgba(212,130,47,0.12)",
    transform: "translateY(-4px)",
  },
  badge: {
    position: "absolute",
    top: 18,
    right: 18,
    background: "#fff4e8",
    color: "#c36f18",
    border: "1px solid #f0d2b0",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
  },
  planName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111827",
  },
  price: {
    marginTop: 12,
    fontSize: 54,
    lineHeight: 1,
    fontWeight: 800,
    color: "#111827",
  },
  planSubtitle: {
    marginTop: 10,
    color: "#6b7280",
    fontSize: 15,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "22px 0 28px",
    display: "grid",
    gap: 12,
    flex: 1,
  },
  listItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    color: "#374151",
    fontSize: 15,
    lineHeight: 1.45,
  },
  check: {
    color: "#d4822f",
    fontWeight: 800,
    lineHeight: 1.2,
  },
  button: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
  },
  buttonPrimary: {
    border: "none",
    background: "#111827",
    color: "#fff",
  },
  buttonSecondary: {
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#111827",
  },
};