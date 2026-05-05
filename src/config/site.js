/**
 * URLs públicas configurables (Vite: prefijo VITE_).
 * Crea un archivo `.env` en la raíz del proyecto (no lo subas con secretos).
 *
 * @see https://vite.dev/guide/env-and-mode.html
 */

const trim = (v) => String(v ?? "").trim();

/** Manual de uso: PDF en `public/` o URL absoluta (Notion, Drive, etc.) */
export const MANUAL_URL =
  trim(import.meta.env.VITE_MANUAL_URL) ||
  "/manual_dashboard_completo_clientes.pdf";

const RAW_DEMO = trim(import.meta.env.VITE_DEMO_APP_URL);

/**
 * App demo / “Iniciar prueba”.
 * Vacío → esta misma web en `/app`.
 * URL `http(s)://…` → otro proyecto desplegado (GitHub Pages, Vercel, etc.).
 */
export function getDemoUrl() {
  return RAW_DEMO || "/app";
}

/** Si true, hay que usar `<a href>` en lugar de React Router `<Link>`. */
export function isDemoExternalUrl() {
  return /^https?:\/\//i.test(getDemoUrl());
}
