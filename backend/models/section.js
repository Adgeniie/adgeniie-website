import mongoose from "mongoose";

const sectionSchema = mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  content: { type: String, required: [true, "Content is required"] },
  videoUrl: { type: String },
  buttonText: { type: String },
  buttonLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Section", sectionSchema);
