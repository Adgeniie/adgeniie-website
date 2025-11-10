// src/api/leadApi.js
import axios from "axios";

/* -----------------------------
   Base URL & Axios instance
------------------------------ */

// Read from env or fallback to localhost
const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
// Remove trailing slashes to avoid //leads
const API_BASE = RAW_BASE.replace(/\/+$/, "");

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 15000, // 15s timeout
});

/* -----------------------------------
   Interceptors
------------------------------------ */

// Normalize errors so UI gets clean messages
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const normalized = {
      status: err.response?.status || 0,
      message:
        err.response?.data?.message ||
        err.message ||
        "Network error. Please try again.",
      data: err.response?.data,
    };
    err.normalized = normalized;
    return Promise.reject(normalized);
  }
);

/* -----------------------------------
   Utilities
------------------------------------ */

const sanitize = (payload) => {
  if (!payload || typeof payload !== "object") return payload;
  const copy = Array.isArray(payload) ? [...payload] : { ...payload };
  for (const k in copy) {
    if (typeof copy[k] === "string") copy[k] = copy[k].trim();
  }
  return copy;
};

const makeIdempotencyKey = () =>
  `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

/* -----------------
   Lead Endpoints
------------------ */

// Create a new lead
export const createLead = async (leadData) => {
  const payload = sanitize(leadData);
  const { data } = await api.post("/leads", payload, {
    headers: {
      "X-Idempotency-Key": makeIdempotencyKey(),
    },
  });
  return data;
};

// Get all leads
export const getLeads = async (params = {}) => {
  const { data } = await api.get("/leads", { params });
  return data;
};

// Get single lead by ID
export const getLeadById = async (id) => {
  const { data } = await api.get(`/leads/${id}`);
  return data;
};

// Update a lead by ID
export const updateLead = async (id, updateData) => {
  const payload = sanitize(updateData);
  const { data } = await api.put(`/leads/${id}`, payload);
  return data;
};

// Delete a lead by ID
export const deleteLead = async (id) => {
  const { data } = await api.delete(`/leads/${id}`);
  return data;
};
