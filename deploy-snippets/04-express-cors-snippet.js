/**
 * Copiar en tu server Express (backend), antes de las rutas /api.
 * Sustituye los orígenes por tu dominio de Vercel.
 */
import cors from "cors";

const allowed = [
  "http://localhost:5173",
  "https://TU-PROYECTO.vercel.app",
  "https://TU-PROD.vercel.app",
];

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true);
      if (allowed.includes(origin)) return cb(null, true);
      return cb(new Error("CORS: origen no permitido"));
    },
    credentials: true,
  })
);
