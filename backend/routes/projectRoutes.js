import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// ✅ Create new project
router.post("/", async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.description) {
      return res
        .status(400)
        .json({ message: "Name and Description are required" });
    }
    await createProject(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Get all projects
router.get("/", async (req, res, next) => {
  try {
    await getProjects(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Get project by ID
router.get("/:id", async (req, res, next) => {
  try {
    await getProjectById(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Update project
router.put("/:id", async (req, res, next) => {
  try {
    await updateProject(req, res);
  } catch (err) {
    next(err);
  }
});

// ✅ Delete project
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteProject(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
