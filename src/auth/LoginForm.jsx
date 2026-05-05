import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import "./auth.css";

export default function LoginForm() {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, error, setError } =
    useAuth();
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onGoogle() {
    setBusy(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (e) {
      setError(mapAuthError(e));
    } finally {
      setBusy(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "login") {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
    } catch (err) {
      setError(mapAuthError(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-card">
      <h1>Accede al dashboard</h1>
      <p className="auth-card__sub">
        Usa tu cuenta de Google o correo y contraseña. La sesión se guarda en
        este dispositivo para los próximos accesos.
      </p>

      {error ? <p className="auth-error">{error}</p> : null}

      <button
        type="button"
        className="auth-btn-google"
        disabled={busy}
        onClick={onGoogle}
      >
        <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
          <path
            fill="#FFC107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
          />
          <path
            fill="#FF3D00"
            d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.178-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
          />
        </svg>
        Continuar con Google
      </button>

      <div className="auth-divider">o correo electrónico</div>

      <form onSubmit={onSubmit}>
        <div className="auth-field">
          <label htmlFor="auth-email">Correo</label>
          <input
            id="auth-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-field">
          <label htmlFor="auth-password">Contraseña</label>
          <input
            id="auth-password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div className="auth-row">
          <button type="submit" className="auth-btn-primary" disabled={busy}>
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </button>
          <button
            type="button"
            className="auth-btn-ghost"
            disabled={busy}
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError(null);
            }}
          >
            {mode === "login" ? "Registrarme" : "Ya tengo cuenta"}
          </button>
        </div>
      </form>
    </div>
  );
}

function mapAuthError(err) {
  const code = err?.code;
  const map = {
    "auth/popup-closed-by-user": "Ventana cerrada. Inténtalo de nuevo.",
    "auth/cancelled-popup-request": "Solicitud cancelada. Inténtalo de nuevo.",
    "auth/email-already-in-use": "Ese correo ya está registrado. Inicia sesión.",
    "auth/invalid-email": "Correo no válido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/user-not-found": "No hay cuenta con ese correo.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/too-many-requests": "Demasiados intentos. Espera unos minutos.",
  };
  return map[code] || err?.message || "No se pudo completar el acceso.";
}
