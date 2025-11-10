import nodemailer from "nodemailer";
import { customerTemplate, adminTemplate } from "../utils/emailTemplate.js";
import EmailLog from "../models/emailLogModel.js";

// Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// Log helper
const logEmail = async ({ to, subject, template, status, error }) => {
  try {
    await EmailLog.create({ to, subject, template, status, error });
  } catch (err) {
    console.error("❌ Failed to log email:", err);
  }
};

// Send Lead Email (Admin)
export const sendLeadEmail = async ({ name, email, phone, message }) => {
  try {
    await transporter.sendMail({
      from: `"Adgeniie" <${process.env.EMAIL_USER}>`,
      to: process.env.LEAD_EMAIL,
      subject: `📩 New Lead from ${name}`,
      html: adminTemplate({ name, email, phone, message }),
    });
    console.log(`✅ Lead email sent to team for: ${name}`);
    await logEmail({ to: process.env.LEAD_EMAIL, subject: `New Lead from ${name}`, template: "admin", status: "SENT" });
  } catch (error) {
    console.error(`❌ Failed to send lead email for ${name}:`, error);
    await logEmail({ to: process.env.LEAD_EMAIL, subject: `New Lead from ${name}`, template: "admin", status: "FAILED", error: error.message });
  }
};

// Send Customer Email
export const sendCustomerEmail = async ({ name, email }) => {
  try {
    await transporter.sendMail({
      from: `"Adgeniie" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We’ve received your message – Adgeniie",
      html: customerTemplate(name),
    });
    console.log(`✅ Customer email sent to: ${email}`);
    await logEmail({ to: email, subject: "We’ve received your message", template: "customer", status: "SENT" });
  } catch (error) {
    console.error(`❌ Failed to send customer email to ${email}:`, error);
    await logEmail({ to: email, subject: "We’ve received your message", template: "customer", status: "FAILED", error: error.message });
  }
};
