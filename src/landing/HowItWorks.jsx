export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Configura tu negocio",
      text: "Agrega tu empresa, trabajadores y servicios para empezar a organizar tu actividad.",
    },
    {
      number: "02",
      title: "Gestiona tus citas",
      text: "Administra las reservas de clientes, cambia estados y evita conflictos de agenda.",
    },
    {
      number: "03",
      title: "Analiza tu negocio",
      text: "Consulta métricas, descubre qué servicios funcionan mejor y mejora tus decisiones.",
    },
  ];

  return (
    <section style={section}>
      {/* <h2 style={title}>Cómo funciona</h2> */}

      <div style={grid}>
        {steps.map((step) => (
          <div key={step.number} style={card}>
            <div style={number}>{step.number}</div>

            <h3 style={cardTitle}>{step.title}</h3>

            <p style={text}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const section = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 28,
  border: "1px solid #e5e7eb",
};

const title = {
  fontSize: 28,
  marginBottom: 24,
  color: "#111827",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 20,
};

const card = {
  padding: 20,
  borderRadius: 16,
  background: "#f9fafb",
  border: "1px solid #e5e7eb",
};

const number = {
  fontSize: 14,
  fontWeight: 700,
  color: "#6b7280",
  marginBottom: 8,
};

const cardTitle = {
  margin: 0,
  fontSize: 18,
  color: "#111827",
};

const text = {
  marginTop: 10,
  fontSize: 15,
  color: "#6b7280",
  lineHeight: 1.5,
};