

// routes/leadRoutes.js
import express from "express";
import {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";
import { body, param } from "express-validator";
import validateRequest from "../middleware/validateRequest.js";

console.log("✅ leadRoutes loaded"); // <-- MUST print at server start

const router = express.Router();

// ✅ DEBUG #2: health check for this router
router.get("/health", (req, res) => {
  res.json({ ok: true, where: "leadRoutes" });
});

// ✅ DEBUG #3: echo body to verify JSON parsing
router.post("/echo", (req, res) => {
  res.json({ received: req.body });
});

// ---- REAL ROUTES ----

// POST /api/leads
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").optional().isMobilePhone().withMessage("Invalid phone number"),
  ],
  validateRequest,
  createLead
);

// GET /api/leads
router.get("/", getLeads);

// GET /api/leads/:id
router.get(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid lead ID")],
  validateRequest,
  getLeadById
);

// PUT /api/leads/:id
router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid lead ID"),
    body("email").optional().isEmail().withMessage("Provide a valid email"),
    body("phone").optional().isMobilePhone().withMessage("Provide valid phone"),
  ],
  validateRequest,
  updateLead
);

// DELETE /api/leads/:id
router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid lead ID")],
  validateRequest,
  deleteLead
);

export default router;
