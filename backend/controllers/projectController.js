// controllers/projectController.js
import Project from "../models/project.js"; // ✅ correct

// Get all projects
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    next(error);
  }
};

// Get single project by ID
export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// Get single project by slug
export const getProjectBySlug = async (req, res, next) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// Create a new project
export const createProject = async (req, res, next) => {
  const { name, slug, description, videoUrl, buttonText, buttonLink } = req.body;
  if (!name || !slug || !description) {
    res.status(400);
    return next(new Error("Name, slug, and description are required"));
  }

  try {
    const project = await Project.create({ name, slug, description, videoUrl, buttonText, buttonLink });
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// Update project by ID
export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// Delete project by ID
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
