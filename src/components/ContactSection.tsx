// src/sections/ContactSection.tsx
import React from "react";

type ContactFormStatus = "idle" | "submitting" | "success" | "error";

const enquiryTypeLabels: Record<string, string> = {
  "private-lesson": "Private coaching",
  "junior-coaching": "Junior coaching",
  "playing-lesson": "On-course / playing lesson",
  other: "Other",
};

export default function ContactSection() {
  const [status, setStatus] = React.useState<ContactFormStatus>("idle");
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const enquiryType = (formData.get("enquiryType") as string) || "other";
    const fullName = ((formData.get("fullName") as string) ?? "").trim();
    const email = ((formData.get("email") as string) ?? "").trim();
    const phone = ((formData.get("phone") as string) ?? "").trim();
    const handicap = (formData.get("handicap") as string) ?? "";
    const preferredTimes = (formData.get("preferredTimes") as string) ?? "";
    const referralSource = (formData.get("referralSource") as string) ?? "";
    const mainMessage = (formData.get("message") as string) ?? "";

    // This is the single "message" field the Netlify function expects.
    // We embed all the structured info so Luke gets full context in the email.
    const composedMessage = `
Enquiry type: ${enquiryTypeLabels[enquiryType] ?? "Other"}
Handicap / experience: ${handicap || "Not specified"}
Preferred lesson times: ${preferredTimes || "Not specified"}
How they heard about Luke: ${referralSource || "Not specified"}

Message:
${mainMessage}
`.trim();

    const payload = {
      // match the serverless function’s expected field names
      name: fullName,
      email,
      phone,
      message: composedMessage,
    };

    try {
      const res = await fetch("/.netlify/functions/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Try to surface any error from the function, otherwise generic
        let msg = "Request failed";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          /* ignore JSON parse errors */
        }
        throw new Error(msg);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        "Something went wrong sending your message. Please try again, or contact Luke directly at his email / phone."
      );
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-slate-50 py-16 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading / intro + form */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] lg:items-start mb-10">
          {/* Text block */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Book a lesson
            </h2>
            <p className="text-slate-300 text-sm lg:text-base mb-4 max-w-md">
              Whether you’re just getting started or looking to fine-tune your
              scoring clubs, send an enquiry and you will be contacted with
              available times and options.
            </p>
            <p className="text-xs text-slate-500">
              Typically responding within{" "}
              <span className="text-slate-200">1–2 business days</span>.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur">
            <form onSubmit={handleSubmit} className="grid gap-5">
              {/* Name + Email */}
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-medium">
                    Full name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium">
                    Email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone + Enquiry Type */}
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-medium">
                    Mobile
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="04xx xxx xxx"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="enquiryType" className="text-xs font-medium">
                    Enquiry type <span className="text-emerald-400">*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    defaultValue=""
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Please select
                    </option>
                    <option value="private-lesson">Private coaching</option>
                    <option value="junior-coaching">Junior coaching</option>
                    <option value="playing-lesson">
                      On-course / playing lesson
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Handicap + Preferred times */}
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="handicap" className="text-xs font-medium">
                    Handicap / experience
                  </label>
                  <input
                    id="handicap"
                    name="handicap"
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="e.g. 12, beginner, returning after a break"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="preferredTimes"
                    className="text-xs font-medium"
                  >
                    Preferred lesson times
                  </label>
                  <input
                    id="preferredTimes"
                    name="preferredTimes"
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="e.g. Weekday afternoons, Saturday mornings"
                  />
                </div>
              </div>

              {/* Referral source */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="referralSource"
                  className="text-xs font-medium"
                >
                  How did you hear about Luke?
                </label>
                <input
                  id="referralSource"
                  name="referralSource"
                  className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="Friend, club, social media, Google, etc."
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                  placeholder="Tell Luke what you’d like help with."
                />
              </div>

              {/* Footer row */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "submitting" ? "Sending..." : "Send"}
                </button>

                <p className="text-[11px] text-slate-500">
                  By submitting, you agree to be contacted about golf coaching
                  and related services.
                </p>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-xs text-emerald-300 mt-1">
                  Thanks for getting in touch — your enquiry has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-300 mt-1">
                  {error ??
                    "Something went wrong sending your message. Please try again."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
