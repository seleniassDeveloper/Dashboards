import { useEffect, useState } from "react";
import AIChat from "./AIChat.jsx";

export default function AIChatFloating() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            right: 20,
            bottom: 96,
            width: 380,
            maxWidth: "94vw",
            height: 520,
            maxHeight: "78vh",
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 800 }}>Asistente IA</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                Insights y análisis del negocio
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                fontSize: 24,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <AIChat />
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          width: 64,
          height: 64,
          borderRadius: "999px",
          border: "none",
          background: "#111827",
          color: "#fff",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 16px 40px rgba(0,0,0,0.20)",
          zIndex: 9999,
        }}
      >
        AI
      </button>
    </>
  );
}