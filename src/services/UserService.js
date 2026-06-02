import axios from "axios";
import { API_BASE } from "../constants";

const baseURL =
  API_BASE || (import.meta.env.DEV ? "http://localhost:8000/api" : "");

if (!baseURL && import.meta.env.PROD) {
  throw new Error(
    "API base URL is not configured. Set VITE_API_URL in Vercel."
  );
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const USERS_PATH = "/users";

const ensureApiBase = () => {
  if (!baseURL) {
    throw new Error(
      "API base URL is not configured. Set VITE_API_URL=https://valencia-server.vercel.app/api"
    );
  }
};

export const loginUser = async (userData) => {
  ensureApiBase();
  const response = await api.post(`${USERS_PATH}/login`, userData);
  return response.data;
};

export const registerUser = async (userData) => {
  ensureApiBase();
  const response = await api.post(`${USERS_PATH}/register`, userData);
  return response.data;
};

export const getUsers = async () => {
  ensureApiBase();
  const response = await api.get(USERS_PATH);
  return response.data;
};

export const getUserById = async (id) => {
  ensureApiBase();
  const response = await api.get(`${USERS_PATH}/${id}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  ensureApiBase();
  const response = await api.put(`${USERS_PATH}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  ensureApiBase();
  const response = await api.delete(`${USERS_PATH}/${id}`);
  return response.data;
};