// backend/utils/emailTemplate.js
//
// Market-fit, ESM module exports (customerTemplate & adminTemplate).
// These functions accept either a single lead object:
//   { name, email, phone, message }
// or individual args: (name, message, phone, email).
//
// Inline styles and table-based layout for broad email-client compatibility.
// Color palette: white / gray / purple (accent) — clean and readable.

// const safe = (v) => (v === undefined || v === null ? "" : String(v));
// export const customerTemplate = (lead) => {
//   const { name = "", email = "", phone = "", message = "" } = lead || {};

//   // Minimal plaintext fallback
//   const plainText = `Thanks ${name} — we received your message.
// Message: ${message}
// Email: ${email}
// Phone: ${phone}
// We will get back to you soon. — Adgeniie`;

//   return `
//   <!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//       <title>Thank you — Adgeniie</title>
//       <style>
//         body,table,td,a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
//         table,td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
//         img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; }
//         a { color: inherit; text-decoration: none; }
//         body { margin:0; padding:0; width:100% !important; background:#f9fafb; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
//         .container { max-width:640px; margin:0 auto; padding:20px; }
//         .card { background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
//         .header { background: linear-gradient(90deg,#6a0dad 0%, #9b30ff 100%); padding:20px; text-align:center; }
//         .header img { width:120px; height:auto; display:block; margin:0 auto 8px; }
//         .header h1 { margin:0; font-size:20px; font-weight:700; color:#fff; }
//         .body { padding:26px; color:#111827; background:#ffffff; }
//         .greeting { font-size:18px; font-weight:700; color:#111827; margin:0 0 12px; }
//         .text { font-size:15px; line-height:1.6; color:#333333; margin:0 0 18px; }
//         .quote { background:#f9fafb; border-left:4px solid #6a0dad; padding:12px 14px; color:#555; border-radius:6px; font-style:italic; margin:16px 0; }
//         .details { background:#faf9ff; border:1px solid #eee; padding:12px; border-radius:8px; color:#374151; font-size:14px; margin-top:12px; }
//         .cta-wrap { text-align:center; margin-top:22px; }
//         .cta { display:inline-block; background:linear-gradient(90deg,#6a0dad,#9b30ff); color:#ffffff; padding:12px 22px; border-radius:30px; font-weight:600; font-size:14px; box-shadow:0 6px 16px rgba(107,13,173,0.18); }
//         .footer { padding:18px 26px; text-align:center; color:#9ca3af; font-size:13px; background:#f9fafb; }
//         @media screen and (max-width:480px) {
//           .body { padding:18px; }
//           .header img { width:100px; }
//           .header h1 { font-size:18px; }
//         }
//       </style>
//     </head>
//     <body>
//       <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
//         <tr>
//           <td align="center">
//             <table class="container" width="640" cellpadding="0" cellspacing="0" role="presentation">
//               <tr>
//                 <td class="card">
//                   <!-- Header -->
//                   <div class="header">
//                     <img src="https://adgeniie.com/logo.png" alt="Adgeniie Logo" />
//                     <h1>Adgeniie</h1>
//                   </div>

//                   <!-- Body -->
//                   <div class="body">
//                     <p class="greeting">Hi ${name || "there"},</p>
//                     <p class="text">Thanks for reaching out to <strong>Adgeniie</strong>. We have received your message and our team will contact you shortly.</p>

//                     <div class="quote">"${message || "No message provided."}"</div>

//                     <div class="details">
//                       <strong>Contact details</strong><br/>
//                       Email: ${email || "N/A"}<br/>
//                       Phone: ${phone || "N/A"}
//                     </div>

//                     <div class="cta-wrap">
//                       <a class="cta" href="https://adgeniie.com" target="_blank" rel="noopener noreferrer">Visit Adgeniie</a>
//                     </div>
//                   </div>

//                   <!-- Footer -->
//                   <div class="footer">
//                     © ${new Date().getFullYear()} Adgeniie. All rights reserved.<br/>
//                     <div style="margin-top:8px; color:#b3b3b3; font-size:12px;">
//                       If you didn't request this or received by mistake, ignore this email.
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>
//       </table>

//       <!-- Plain text fallback -->
//       <div style="display:none; opacity:0; height:0; width:0; overflow:hidden;">
//         ${plainText}
//       </div>
//     </body>
//   </html>
//   `;
// };

// backend/utils/emailTemplate.js

const safe = (v) => (v === undefined || v === null ? "" : String(v));

/* ===========================================
   CUSTOMER TEMPLATE
=========================================== */
export const customerTemplate = (lead) => {
  const name = safe(lead?.name);
  const email = safe(lead?.email);
  const phone = safe(lead?.phone);
  const message = safe(lead?.message);

  const plainText = `Thanks ${name} — we received your message.
Message: ${message}
Email: ${email}
Phone: ${phone}
We will get back to you soon. — Adgeniie`;

  return `
  <!doctype html>
  <html>
    <body style="font-family: Arial; background:#f9fafb; padding:20px;">
      <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px;">
        <h2>Thank you, ${name}</h2>
        <p>We have received your message.</p>

        <blockquote style="background:#f3f3f3;padding:10px;border-left:4px solid purple;">
          ${message || "No message provided."}
        </blockquote>

        <h3>Contact Details</h3>
        <p>Email: ${email || "N/A"}</p>
        <p>Phone: ${phone || "N/A"}</p>

        <p>We will contact you shortly.<br/>– Adgeniie Team</p>
      </div>

      <div style="display:none;">${plainText}</div>
    </body>
  </html>
  `;
};

/* ===========================================
   ADMIN TEMPLATE
=========================================== */
export const adminTemplate = (lead) => {
  const name = safe(lead?.name);
  const email = safe(lead?.email);
  const phone = safe(lead?.phone);
  const message = safe(lead?.message);

  return `
  <!doctype html>
  <html>
    <body style="font-family: Arial; background:#f4f4f4; padding:20px;">
      <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px;">
        <h2>📩 New Lead Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>

        <p>Submitted at: ${new Date().toLocaleString()}</p>
      </div>
    </body>
  </html>
  `;
};
