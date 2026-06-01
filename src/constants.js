// Use Vite env var when provided, otherwise default to local server
const rawApiUrl = import.meta.env.VITE_API_URL;

// Normalize rawApiUrl: handle values like ':8000/api' or '8000/api' by
// prepending http://localhost so axios gets a valid origin.
const normalizeUrl = (url) => {
	if (!url) return null;
	// If it starts with ':' or digits (port-only), prepend localhost
	if (/^:\d+/.test(url) || /^\d+/.test(url)) {
		return `http://localhost${url.startsWith(":") ? url : `:${url}`}`;
	}
	// If it starts with '//', add protocol
	if (/^\/\//.test(url)) return `http:${url}`;
	return url;
};

const normalized = normalizeUrl(rawApiUrl);
export const API_URL = normalized || "http://localhost:8000/api";

// Backwards-compatible base for services that append paths like `/users`
export const API_BASE = API_URL.replace(/\/api\/?$/, "") + "/api";