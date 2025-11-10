import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    subject: { type: String, required: true },
    template: { type: String }, // "customer" or "admin"
    status: { type: String, enum: ["SENT", "FAILED"], default: "SENT" },
    error: { type: String }, // store error message if failed
  },
  { timestamps: true }
);

export default mongoose.model("EmailLog", emailLogSchema);
