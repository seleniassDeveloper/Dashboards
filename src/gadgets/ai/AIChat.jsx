import { useState } from "react";

const API = "http://localhost:3001/api";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendQuestion() {
    if (!question.trim()) return;

    const currentQuestion = question;
    setMessages((m) => [...m, { role: "user", text: currentQuestion }]);
    setQuestion("");

    try {
      const res = await fetch(`${API}/ai/report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: currentQuestion }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: data.summary || "No hay respuesta.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { role: "ai", text: "Error consultando IA." }]);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, padding: 14, overflow: "auto" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              background: m.role === "user" ? "#111827" : "#f3f4f6",
              color: m.role === "user" ? "#fff" : "#111827",
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          display: "flex",
        }}
      >
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Pregunta algo sobre tu negocio..."
          style={{
            flex: 1,
            border: "none",
            padding: 14,
            outline: "none",
          }}
        />
        <button
          onClick={sendQuestion}
          style={{
            border: "none",
            background: "#111827",
            color: "#fff",
            padding: "0 16px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}