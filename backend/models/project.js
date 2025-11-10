// models/Project.js
import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // e.g., "project-k"
  description: { type: String, required: true },
  videoUrl: { type: String },
  buttonText: { type: String },
  buttonLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Project", projectSchema);
