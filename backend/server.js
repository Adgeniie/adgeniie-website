// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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

// ✅ CORS Setup (for Vercel/Netlify frontend)
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// ✅ Body parser
app.use(express.json());

// ✅ Debug: log each incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ✅ Root Welcome Route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Adgeniie Backend is Live 🚀" });
});

// ✅ Liveness Check
app.get("/ping", (req, res) => {
  res.json({ ok: true, message: "PONG ✅ Backend is running fine" });
});

// ✅ API Routes
app.use("/api/projects", projectRoutes);
console.log("✅ Mounted /api/projects");

app.use("/api/leads", leadRoutes);
console.log("✅ Mounted /api/leads");

app.use("/api/sections", sectionRoutes);
console.log("✅ Mounted /api/sections");

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found ❌" });
});

// ✅ Error Handler
app.use(errorHandler);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Adgeniie Backend running on port ${PORT}`);
});
