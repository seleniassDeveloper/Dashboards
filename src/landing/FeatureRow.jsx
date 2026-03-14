export default function FeatureRow() {
  const features = [
    {
      icon: "📅",
      title: "Gestión de citas",
      text: "Organiza todas las citas de tus clientes en un solo lugar y evita errores o dobles reservas.",
    },
    {
      icon: "👥",
      title: "Clientes y trabajadores",
      text: "Administra tu equipo y tu base de clientes con historial completo de servicios.",
    },
    {
      icon: "📊",
      title: "Métricas del negocio",
      text: "Descubre qué servicios funcionan mejor y cómo mejorar tus ingresos.",
    },
    {
      icon: "🤖",
      title: "Asistente con IA",
      text: "Haz preguntas sobre tu negocio y recibe análisis automáticos de tus datos.",
    },
  ];

  return (
    <section style={section}>
      <div style={grid}>
        {features.map((f, i) => (
          <div key={i} style={card}>
            <div style={icon}>{f.icon}</div>

            <h3 style={title}>{f.title}</h3>

            <p style={text}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const section = {
  marginTop: 10,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 20,
};

const card = {
  background: "#ffffff",
  borderRadius: 20,
  padding: 24,
  border: "1px solid #e5e7eb",
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
  transition: "transform .2s ease",
};

const icon = {
  fontSize: 34,
  marginBottom: 12,
};

const title = {
  margin: 0,
  fontSize: 20,
  color: "#111827",
};

const text = {
  marginTop: 10,
  color: "#6b7280",
  fontSize: 15,
  lineHeight: 1.5,
};