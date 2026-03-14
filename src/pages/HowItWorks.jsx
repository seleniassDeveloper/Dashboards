import { useEffect, useRef, useState } from "react";
import "../styles/HowItWorks.css";
import mockup from "../assets/seccion3.png";

export default function HowItWorks() {
  return (
    <section
      style={{
        background: "#faf7f3",
        borderRadius: 28,
        padding: 32,
        border: "1px solid #eee1d2",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 20,
          fontSize: 36,
          lineHeight: 1.05,
          color: "#1f2937",
        }}
      >
        ¿Cómo funciona?
      </h2>

      <div
        style={{
          display: "grid",
          gap: 18,
        }}
      >
        <div>
          <strong>1. Personaliza tu sistema</strong>
          <p style={{ margin: "8px 0 0", color: "#555" }}>
            Configura nombre de empresa, imagen del header, color de marca y tipografía.
          </p>
        </div>

        <div>
          <strong>2. Crea servicios y trabajadores</strong>
          <p style={{ margin: "8px 0 0", color: "#555" }}>
            Define tus servicios, precios, duración y horarios de trabajo por empleado.
          </p>
        </div>

        <div>
          <strong>3. Registra y controla citas</strong>
          <p style={{ margin: "8px 0 0", color: "#555" }}>
            Gestiona citas, estados, cancelaciones, pagos y métricas del negocio.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 26 }}>
        <a
          href="/manual-dashboard.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 18px",
            borderRadius: 12,
            background: "#111827",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Ver manual completo
        </a>
      </div>
    </section>
  );
}