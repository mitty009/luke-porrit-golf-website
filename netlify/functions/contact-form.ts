// netlify/functions/contact-form.ts
import type { Handler } from "@netlify/functions";
import Mailgun from "mailgun.js";
import FormData from "form-data";

// ----- Config from environment -----
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "mg.lukeporrittgolf.com.au";
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "lukeporritt@pgamember.org.au";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ||
  `Website Enquiries <postmaster@${MAILGUN_DOMAIN}>`;

// Use EU endpoint if your domain is EU; otherwise default is fine
const MAILGUN_BASE_URL =
  process.env.MAILGUN_BASE_URL || "https://api.mailgun.net";

// Create Mailgun client once per function instance
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY || "",
  url: MAILGUN_BASE_URL,
});

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  enquiryType?: string;
  enquiryTypeLabel?: string;
  handicap?: string;
  preferredTimes?: string;
  referralSource?: string;
  message: string;
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.error("Missing Mailgun config", {
      hasKey: !!MAILGUN_API_KEY,
      MAILGUN_DOMAIN,
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email configuration error" }),
    };
  }

  let data: ContactPayload;

  try {
    data = JSON.parse(event.body || "{}") as ContactPayload;
  } catch (err) {
    console.error("Invalid JSON body", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const {
    fullName,
    email,
    phone,
    enquiryType,
    enquiryTypeLabel,
    handicap,
    preferredTimes,
    referralSource,
    message,
  } = data;

  if (!fullName || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Full name, email and message are required.",
      }),
    };
  }

  const subject =
    enquiryTypeLabel || enquiryType
      ? `New ${enquiryTypeLabel || enquiryType} enquiry – ${fullName}`
      : `New coaching enquiry – ${fullName}`;

  const textBody = [
    "New enquiry from the website:",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Mobile: ${phone || "N/A"}`,
    `Enquiry type: ${enquiryTypeLabel || enquiryType || "N/A"}`,
    `Handicap / experience: ${handicap || "N/A"}`,
    `Preferred lesson times: ${preferredTimes || "N/A"}`,
    `How they heard about Luke: ${referralSource || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const result = await mg.messages.create(MAILGUN_DOMAIN, {
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      subject,
      text: textBody,
    });

    console.log("Mailgun message sent", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.error("Mailgun send error", error);
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error?.message ?? String(error),
      }),
    };
  }
};
