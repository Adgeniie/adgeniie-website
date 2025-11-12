// // backend/utils/emailService.js
// import { Resend } from "resend";
// import EmailLog from "../models/emailLogModel.js";
// import { customerTemplate, adminTemplate } from "../utils/emailTemplate.js";

// const resend = new Resend(process.env.RESEND_API_KEY);

// // Helper to log emails
// const logEmail = async ({ to, subject, template, status, error }) => {
//   try {
//     await EmailLog.create({ to, subject, template, status, error });
//   } catch (err) {
//     console.error("❌ Failed to log email:", err);
//   }
// };

// // Send Lead Email (Admin Notification)
// export const sendLeadEmail = async ({ name, email, phone, message }) => {
//   try {
//     console.log("🚀 Sending lead email via Resend...");
//     const data = await resend.emails.send({
//       from: "Adgeniie <hello@adgeniie.com>",
//       to: "adgeniie7@gmail.com", // ✅ notification email
//       subject: `📩 New Lead from ${name}`,
//       html: adminTemplate({ name, email, phone, message }),
//     });

//     console.log(`✅ Lead email sent to adgeniie7@gmail.com for ${name}`, data?.id || data);
//     await logEmail({
//       to: "adgeniie7@gmail.com",
//       subject: `New Lead from ${name}`,
//       template: "admin",
//       status: "SENT",
//     });
//   } catch (error) {
//     console.error(`❌ Failed to send lead email for ${name}:`, error);
//     await logEmail({
//       to: "adgeniie7@gmail.com",
//       subject: `New Lead from ${name}`,
//       template: "admin",
//       status: "FAILED",
//       error: error.message,
//     });
//   }
// };

// // Send Customer Email (Auto reply)
// export const sendCustomerEmail = async ({ name, email, phone, message }) => {

//   try {
//     console.log("🚀 Sending customer thank-you email...");
//     const data = await resend.emails.send({
//       from: "Adgeniie <hello@adgeniie.com>",
//       to: email,
//       subject: "✅ We’ve received your message – Adgeniie",
//       html: customerTemplate({ name, email, phone, message }),

//     });

//     console.log(`✅ Customer email sent to: ${email}`, data?.id || data);
//     await logEmail({
//       to: email,
//       subject: "We’ve received your message",
//       template: "customer",
//       status: "SENT",
//     });
//   } catch (error) {
//     console.error(`❌ Failed to send customer email to ${email}:`, error);
//     await logEmail({
//       to: email,
//       subject: "We’ve received your message",
//       template: "customer",
//       status: "FAILED",
//       error: error.message,
//     });
//   }
// };

// backend/utils/emailService.js
import { Resend } from "resend";
import EmailLog from "../models/emailLogModel.js";
import { customerTemplate, adminTemplate } from "../utils/emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// -----------------------------
// Helper to log emails
// -----------------------------
const logEmail = async ({ to, subject, template, status, error }) => {
  try {
    await EmailLog.create({ to, subject, template, status, error });
  } catch (err) {
    console.error("❌ Failed to log email:", err);
  }
};

// -----------------------------
// Send Lead Email (Admin Notification)
// -----------------------------
export const sendLeadEmail = async ({ name, email, phone, message }) => {
  try {
    console.log("🚀 Sending lead email via Resend...");

    const data = await resend.emails.send({
      from: "Adgeniie <hello@adgeniie.com>",
      to: "adgeniie7@gmail.com", // admin notification email
      subject: `📩 New Lead from ${name}`,
      html: adminTemplate({ name, email, phone, message }),
    });

    console.log(`✅ Lead email sent to admin for ${name}`, data?.id || data);

    await logEmail({
      to: "adgeniie7@gmail.com",
      subject: `New Lead from ${name}`,
      template: "admin",
      status: "SENT",
    });
  } catch (error) {
    console.error(`❌ Failed to send lead email for ${name}:`, error.message);
    await logEmail({
      to: "adgeniie7@gmail.com",
      subject: `New Lead from ${name}`,
      template: "admin",
      status: "FAILED",
      error: error.message,
    });
  }
};

// -----------------------------
// Send Customer Email (Auto Reply)
// -----------------------------
export const sendCustomerEmail = async ({ name, email, phone, message }) => {
  try {
    console.log("🚀 Sending customer thank-you email...");

    const data = await resend.emails.send({
      from: "Adgeniie <hello@adgeniie.com>",
      to: email,
      subject: "✅ We’ve received your message – Adgeniie",
      html: customerTemplate({ name, email, phone, message }), // pass all fields
    });

    console.log(`✅ Customer email sent to: ${email}`, data?.id || data);

    await logEmail({
      to: email,
      subject: "We’ve received your message",
      template: "customer",
      status: "SENT",
    });
  } catch (error) {
    console.error(`❌ Failed to send customer email to ${email}:`, error.message);
    await logEmail({
      to: email,
      subject: "We’ve received your message",
      template: "customer",
      status: "FAILED",
      error: error.message,
    });
  }
};
