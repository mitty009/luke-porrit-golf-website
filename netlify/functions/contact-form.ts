// netlify/functions/contact-form.ts
import type { Handler } from "@netlify/functions";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL!;

export const handler: Handler = async (event: { httpMethod: string; body: any; }) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !CONTACT_TO_EMAIL) {
    console.error("Missing Mailgun env vars");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server email configuration error" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}") as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name, email, and message are required." }),
      };
    }

    const subject = `New enquiry from ${name} – Luke Porritt Golf`;
    const textBody = `
New enquiry from the website:

Name:   ${name}
Email:  ${email}
Phone:  ${phone || "N/A"}

Message:
${message}
    `.trim();

    // Mailgun API endpoint
    const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

    // Build form-encoded body
    const formData = new URLSearchParams();
    formData.append("from", `Website Enquiries <no-reply@${MAILGUN_DOMAIN}>`);
    formData.append("to", CONTACT_TO_EMAIL);
    formData.append("subject", subject);
    formData.append("text", textBody);

    // Node 18+ on Netlify has global fetch
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mailgun error:", response.status, errorText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Contact form handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unexpected server error" }),
    };
  }
};
