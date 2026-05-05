import { API_BASE } from "../config/api.js";

export class ApiError extends Error {
  constructor(message, { status = 0, body = null, url = "" } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
    this.url = url;
  }
}

/** Mensaje listo para mostrar al usuario */
export function formatApiError(err) {
  if (err instanceof ApiError) {
    if (err.status === 0) return err.message || "Sin conexión con el servidor.";
    if (err.status >= 500) return "El servidor no está disponible. Intenta más tarde.";
    if (err.status === 404) return "Recurso no encontrado.";
    if (err.status === 401 || err.status === 403) return "No autorizado.";
    return err.message || `Error ${err.status}`;
  }
  return err?.message || "Error desconocido.";
}

/**
 * fetch centralizado: timeout, JSON opcional, errores unificados.
 * @param {string} path ej. "/metrics" o "appointments"
 * @param {RequestInit & { timeoutMs?: number }} options
 */
export async function apiFetch(path, options = {}) {
  const { timeoutMs = 20000, headers, ...init } = options;

  if (!API_BASE) {
    throw new ApiError(
      "API no configurada: define VITE_API_URL en Vercel (URL de tu backend + /api).",
      { status: 0 }
    );
  }

  const rel = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE}${rel}`;

  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...init,
      signal: ctrl.signal,
      headers: {
        Accept: "application/json",
        ...headers,
      },
    });

    const text = await res.text();
    let data = null;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }

    if (!res.ok) {
      const msg =
        (typeof data === "object" && data && (data.message || data.error)) ||
        res.statusText ||
        "Error de API";
      throw new ApiError(String(msg), { status: res.status, body: data, url });
    }

    if (res.status === 204 || text === "") return null;
    return data;
  } catch (e) {
    if (e instanceof ApiError) throw e;
    if (e?.name === "AbortError") {
      throw new ApiError("Tiempo de espera agotado. Revisa la red o el servidor.", {
        status: 0,
        url,
      });
    }
    throw new ApiError(e?.message || "No se pudo conectar con la API.", {
      status: 0,
      url,
    });
  } finally {
    clearTimeout(tid);
  }
}
