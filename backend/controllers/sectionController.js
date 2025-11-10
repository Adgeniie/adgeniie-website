// controllers/sectionController.js
import Section from "../models/section.js"; // ✅ correct

// @desc    Create new section
// @route   POST /api/sections
// @access  Public
export const createSection = async (req, res, next) => {
  try {
    const { title, content, projectId } = req.body;

    if (!title || !content || !projectId) {
      res.status(400);
      throw new Error("Title, content, and projectId are required");
    }

    const newSection = await Section.create({ title, content, projectId });

    res.status(201).json({
      success: true,
      data: newSection,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all sections
// @route   GET /api/sections
// @access  Public
export const getSections = async (req, res, next) => {
  try {
    const sections = await Section.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: sections.length,
      data: sections,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single section by ID
// @route   GET /api/sections/:id
// @access  Public
export const getSectionById = async (req, res, next) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section) {
      res.status(404);
      throw new Error("Section not found");
    }
    res.status(200).json({ success: true, data: section });
  } catch (error) {
    next(error);
  }
};

// @desc    Update section by ID
// @route   PUT /api/sections/:id
// @access  Public
export const updateSection = async (req, res, next) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!section) {
      res.status(404);
      throw new Error("Section not found");
    }

    res.status(200).json({ success: true, data: section });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete section by ID
// @route   DELETE /api/sections/:id
// @access  Public
export const deleteSection = async (req, res, next) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    if (!section) {
      res.status(404);
      throw new Error("Section not found");
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
