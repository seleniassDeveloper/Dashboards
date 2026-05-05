/** Solo desarrollo: salta login (no uses en producción). */
export function isAuthDisabled() {
  return import.meta.env.VITE_AUTH_DISABLED === "true";
}
