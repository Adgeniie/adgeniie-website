// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

// Routes
import projectRoutes from "./routes/projectRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";

// Middleware
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS Setup (for any domain, or limit if needed)
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// ✅ Body parser
app.use(express.json());

// ✅ Debug log for each request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ✅ API Routes
app.use("/api/projects", projectRoutes);
console.log("✅ Mounted /api/projects");

app.use("/api/leads", leadRoutes);
console.log("✅ Mounted /api/leads");

app.use("/api/sections", sectionRoutes);
console.log("✅ Mounted /api/sections");

// ✅ Serve frontend (Vite build folder)
app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

// ✅ 404 Handler (only for API routes, after frontend catch-all)
app.use((req, res, next) => {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ success: false, message: "API route not found ❌" });
  }
  next();
});

// ✅ Error Handler
app.use(errorHandler);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Adgeniie Backend running on port ${PORT}`);
});
