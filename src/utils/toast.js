// src/utils/toast.js
import toast from "react-hot-toast";

export const notifySuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    style: {
      background: "#0f172a", // dark premium
      color: "#fff",
      borderRadius: "12px",
      padding: "12px 18px",
      fontWeight: "500",
    },
    iconTheme: {
      primary: "#22c55e",
      secondary: "#fff",
    },
  });
};

export const notifyError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    style: {
      background: "#0f172a",
      color: "#fff",
      borderRadius: "12px",
      padding: "12px 18px",
      fontWeight: "500",
    },
    iconTheme: {
      primary: "#ef4444",
      secondary: "#fff",
    },
  });
};