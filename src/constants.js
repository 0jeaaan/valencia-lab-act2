// Read Vite env var at build time
const rawApiUrl = import.meta.env.VITE_API_URL;

// Normalize incoming URL: accept full url, protocol-less (//host), or port-only (:8000)
const normalizeUrl = (url) => {
	if (!url) return null;
	// port-only like :8000 or 8000
	if (/^:\d+/.test(url) || /^\d+$/.test(url)) {
		return `http://localhost${url.startsWith(":") ? url : `:${url}`}`;
	}
	// protocol-less //host
	if (/^\/\//.test(url)) return `http:${url}`;
	return url;
};

const normalized = normalizeUrl(rawApiUrl);

// IMPORTANT: In production we must use the environment-provided VITE_API_URL.
// Only fall back to localhost when running in dev mode (import.meta.env.DEV).
export const API_URL = normalized ?? (import.meta.env.DEV ? "http://localhost:8000/api" : "");

// API_BASE will be an origin + /api (for building axios baseURL). If empty string,
// services should handle the missing base (they'll error clearly).
export const API_BASE = API_URL ? API_URL.replace(/\/api\/?$/, "") + "/api" : "";