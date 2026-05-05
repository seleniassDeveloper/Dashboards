import { useAuth } from "./AuthContext.jsx";
import { isFirebaseConfigured } from "../lib/firebase.js";
import { isAuthDisabled } from "./authConfig.js";
import LoginForm from "./LoginForm.jsx";
import "./auth.css";

export default function LoginGate({ children }) {
  const { user, loading } = useAuth();

  if (isAuthDisabled()) {
    return children;
  }

  if (!isFirebaseConfigured()) {
    return (
      <div className="auth-gate">
        <div className="auth-card">
          <h1>Configura Firebase</h1>
          <div className="auth-setup">
            <p>
              Para usar Google y correo/contraseña necesitas un proyecto en{" "}
              <a
                href="https://console.firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Console
              </a>
              : activa <strong>Authentication</strong> (Google y Email/contraseña)
              y crea <strong>Firestore</strong>. Luego copia las claves web en un
              archivo <code>.env</code> en la raíz de este proyecto (ver{" "}
              <code>.env.example</code>).
            </p>
            <p>
              Reglas de ejemplo para Firestore (solo el usuario autenticado lee
              y escribe su documento):
            </p>
            <pre
              className="auth-setup"
              style={{
                marginTop: 10,
                padding: "10px 12px",
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                fontSize: 11,
                overflowX: "auto",
              }}
            >
              {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}`}
            </pre>
            <p style={{ marginTop: 14 }}>
              Mientras desarrollas sin Firebase, puedes poner en{" "}
              <code>.env</code>:{" "}
              <code>VITE_AUTH_DISABLED=true</code> para entrar al dashboard sin
              login (no en producción).
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="auth-gate">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <div className="auth-spinner" />
          <p className="auth-card__sub" style={{ margin: 0 }}>
            Comprobando sesión…
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="auth-gate">
        <LoginForm />
      </div>
    );
  }

  return children;
}
