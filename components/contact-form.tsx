"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("company_website") ?? "").trim()) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        organisation ? `Organisation: ${organisation}` : "",
        phone ? `Telephone: ${phone}` : "",
        "",
        message,
      ]
        .filter((line, index, lines) => line !== "" || lines[index - 1] !== "")
        .join("\n"),
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-green/30 bg-green/5 p-6" role="status">
        <p className="font-semibold text-navy">Your email client should now be open.</p>
        <p className="mt-2 text-sm text-muted">
          If nothing appeared, write directly to{" "}
          <a className="text-blue underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <Field label="Full name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organisation" name="organisation" autoComplete="organization" />
        <Field label="Telephone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-navy">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y border border-line bg-white px-3 py-2.5 font-normal text-ink outline-none transition focus:border-blue"
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-blue px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-blue-dark"
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-navy">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-line bg-white px-3 py-2.5 font-normal text-ink outline-none transition focus:border-blue"
      />
    </label>
  );
}
