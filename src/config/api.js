/**
 * URL base del backend Express (debe terminar sin slash o se normaliza).
 *
 * - Desarrollo: si no defines nada → http://localhost:3001/api
 * - Producción (Vercel): OBLIGATORIO definir VITE_API_URL apuntando a Render, ej:
 *   https://tu-api.onrender.com/api
 */
const raw = String(import.meta.env.VITE_API_URL ?? "").trim();
const isProd = import.meta.env.PROD;
const devFallback = "http://localhost:3001/api";

export const API_CONFIGURED = isProd ? Boolean(raw) : true;

export const API_BASE = raw
  ? raw.replace(/\/$/, "")
  : isProd
    ? ""
    : devFallback;

if (isProd && !raw) {
  // Visible en consola del navegador en build de producción
  console.error(
    "[Dashboard] Falta VITE_API_URL. Añádela en Vercel → Settings → Environment Variables."
  );
}
