import { MANUAL_URL } from "../config/site.js";

/**
 * Enlace al manual (`VITE_MANUAL_URL` o PDF por defecto en `public/`).
 */
export default function ManualLink({ className, children }) {
  return (
    <a
      className={className}
      href={MANUAL_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
