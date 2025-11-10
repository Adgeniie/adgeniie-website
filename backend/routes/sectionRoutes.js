
import express from "express";
import {
  createSection,
  getSections,
  getSectionById,
  updateSection,
  deleteSection,
} from "../controllers/sectionController.js";

const router = express.Router();

// ✅ Create new section
router.post("/", async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({ message: "Title and Content are required" });
    }
    await createSection(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Get all sections
router.get("/", async (req, res, next) => {
  try {
    await getSections(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Get section by ID
router.get("/:id", async (req, res, next) => {
  try {
    await getSectionById(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Update section
router.put("/:id", async (req, res, next) => {
  try {
    await updateSection(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Delete section
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteSection(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
