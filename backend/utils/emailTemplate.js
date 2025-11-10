// backend/utils/emailTemplate.js
//
// Market-fit, ESM module exports (customerTemplate & adminTemplate).
// These functions accept either a single lead object:
//   { name, email, phone, message }
// or individual args: (name, message, phone, email).
//
// Inline styles and table-based layout for broad email-client compatibility.
// Color palette: white / gray / purple (accent) — clean and readable.

const safe = (v) => (v === undefined || v === null ? "" : String(v));

export const customerTemplate = (leadOrName, maybeMessage, maybePhone, maybeEmail) => {
  // Support either object or params
  let name, message, phone, email;
  if (typeof leadOrName === "object" && leadOrName !== null) {
    name = safe(leadOrName.name);
    message = safe(leadOrName.message);
    phone = safe(leadOrName.phone);
    email = safe(leadOrName.email);
  } else {
    name = safe(leadOrName);
    message = safe(maybeMessage);
    phone = safe(maybePhone);
    email = safe(maybeEmail);
  }

  // Minimal plaintext fallback
  const plainText = `Thanks ${name} — we received your message.
Message: ${message}
Email: ${email}
Phone: ${phone}
We will get back to you soon. — Adgeniie`;

  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Thank you — Adgeniie</title>
      <style>
        body,table,td,a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
        table,td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
        img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; }
        a { color: inherit; text-decoration: none; }
        body { margin:0; padding:0; width:100% !important; background:#f9fafb; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .container { max-width:640px; margin:0 auto; padding:20px; }
        .card { background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(90deg,#6a0dad 0%, #9b30ff 100%); padding:20px; text-align:center; }
        .header img { width:120px; height:auto; display:block; margin:0 auto 8px; }
        .header h1 { margin:0; font-size:20px; font-weight:700; color:#fff; }
        .body { padding:26px; color:#111827; background:#ffffff; }
        .greeting { font-size:18px; font-weight:700; color:#111827; margin:0 0 12px; }
        .text { font-size:15px; line-height:1.6; color:#333333; margin:0 0 18px; }
        .quote { background:#f9fafb; border-left:4px solid #6a0dad; padding:12px 14px; color:#555; border-radius:6px; font-style:italic; margin:16px 0; }
        .details { background:#faf9ff; border:1px solid #eee; padding:12px; border-radius:8px; color:#374151; font-size:14px; margin-top:12px; }
        .cta-wrap { text-align:center; margin-top:22px; }
        .cta { display:inline-block; background:linear-gradient(90deg,#6a0dad,#9b30ff); color:#ffffff; padding:12px 22px; border-radius:30px; font-weight:600; font-size:14px; box-shadow:0 6px 16px rgba(107,13,173,0.18); }
        .footer { padding:18px 26px; text-align:center; color:#9ca3af; font-size:13px; background:#f9fafb; }
        @media screen and (max-width:480px) {
          .body { padding:18px; }
          .header img { width:100px; }
          .header h1 { font-size:18px; }
        }
      </style>
    </head>
    <body>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center">
            <table class="container" width="640" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="card">
                  <!-- Header -->
                  <div class="header">
                    <img src="https://i.ibb.co/4RZ9CHM/adgeniie-logo.png" alt="Adgeniie Logo" />
                    <h1>Adgeniie</h1>
                  </div>

                  <!-- Body -->
                  <div class="body">
                    <p class="greeting">Hi ${name || "there"},</p>
                    <p class="text">Thanks for reaching out to <strong>Adgeniie</strong>. We have received your message and our team will contact you shortly.</p>

                    <div class="quote">"${message || "No message provided."}"</div>

                    <div class="details">
                      <strong>Contact details</strong><br/>
                      Email: ${email || "N/A"}<br/>
                      Phone: ${phone || "N/A"}
                    </div>

                    <div class="cta-wrap">
                      <a class="cta" href="https://adgeniie.com" target="_blank" rel="noopener noreferrer">Visit Adgeniie</a>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div class="footer">
                    © ${new Date().getFullYear()} Adgeniie. All rights reserved.<br/>
                    <div style="margin-top:8px; color:#b3b3b3; font-size:12px;">
                      If you didn't request this or received by mistake, ignore this email.
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Plain text fallback -->
      <div style="display:none; opacity:0; height:0; width:0; overflow:hidden;">
        ${plainText}
      </div>
    </body>
  </html>
  `;
};

// ✅ Admin template stays the same (not touched)
export const adminTemplate = (leadOrName, maybeEmail, maybePhone, maybeMessage) => {
  let name, email, phone, message;
  if (typeof leadOrName === "object" && leadOrName !== null) {
    name = safe(leadOrName.name);
    email = safe(leadOrName.email);
    phone = safe(leadOrName.phone);
    message = safe(leadOrName.message);
  } else {
    name = safe(leadOrName);
    email = safe(maybeEmail);
    phone = safe(maybePhone);
    message = safe(maybeMessage);
  }

  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Lead — Adgeniie</title>
      <style>
        body { margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background:#f4f4f6; color:#222; }
        .wrap { max-width:700px; margin:20px auto; padding:18px; }
        .card { background:#fff; border-radius:10px; padding:18px; border:1px solid #efe8ff; box-shadow:0 8px 24px rgba(106,13,173,0.06); }
        h2 { margin:0 0 10px; color:#6a0dad; }
        p { margin:8px 0; color:#333; font-size:14px; line-height:1.5; }
        table { width:100%; border-collapse:collapse; margin-top:12px; }
        td { padding:10px; border:1px solid #f1eff8; vertical-align:top; font-size:14px; color:#333; }
        .label { background:#fbf7ff; color:#6a0dad; font-weight:700; width:140px; }
        .meta { font-size:12px; color:#6b7280; margin-top:12px; }
        .footer { margin-top:18px; font-size:12px; color:#6b7280; }
        @media screen and (max-width:480px) {
          .wrap { padding:12px; }
          td { font-size:13px; padding:8px; }
        }
      </style>
    </head>
    <body>
      <div class="wrap">
        <div class="card">
          <h2>📩 New Lead Received</h2>
          <p>A new contact form submission was received on <strong>Adgeniie</strong>.</p>
          <table role="presentation">
            <tr><td class="label">Name</td><td>${name || "—"}</td></tr>
            <tr><td class="label">Email</td><td>${email || "—"}</td></tr>
            <tr><td class="label">Phone</td><td>${phone || "N/A"}</td></tr>
            <tr><td class="label">Message</td><td>${message || "—"}</td></tr>
          </table>
          <div class="meta">Submitted at: ${new Date().toLocaleString()}</div>
          <div class="footer">This is an automated notification from Adgeniie website.</div>
        </div>
      </div>
    </body>
  </html>
  `;
};
