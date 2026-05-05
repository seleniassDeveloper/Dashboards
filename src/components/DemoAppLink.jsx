import { Link } from "react-router-dom";
import { getDemoUrl, isDemoExternalUrl } from "../config/site.js";

/**
 * Enlace a la app de prueba: `/app` en este repo o URL externa vía `VITE_DEMO_APP_URL`.
 */
export default function DemoAppLink({ className, children }) {
  const href = getDemoUrl();

  if (isDemoExternalUrl()) {
    return (
      <a className={className} href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}
