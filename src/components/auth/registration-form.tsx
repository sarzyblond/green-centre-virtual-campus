"use client";

import { useState } from "react";

const fieldClass = "h-12 w-full rounded-md border border-[#ccd7cf] px-4 outline-none transition focus:border-[#153e2a] focus:ring-2 focus:ring-[#cfe2d5]";

export function RegistrationForm() {
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirmPassword") ?? "");
    if (password !== confirm) {
      setMessage("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }
    setMessage("The registration form is valid. Account creation will be connected in Step 2.");
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      {[
        ["fullName", "Full name", "text", "Your full name"],
        ["email", "Email address", "email", "you@example.com"],
        ["phone", "Phone number", "tel", "+00 000 000 000"],
        ["whatsapp", "WhatsApp number", "tel", "+00 000 000 000"],
        ["password", "Password", "password", "At least 8 characters"],
        ["confirmPassword", "Confirm password", "password", "Repeat your password"],
        ["dateOfBirth", "Date of birth", "date", ""],
        ["country", "Country", "text", "Country"],
        ["state", "State or region", "text", "State or region"],
        ["qualification", "Previous qualification", "text", "Qualification"],
        ["institution", "Previous institution", "text", "Institution, if applicable"],
      ].map(([name, label, type, placeholder]) => (
        <div key={name}>
          <label htmlFor={name} className="mb-2 block text-sm font-semibold text-[#445047]">{label}</label>
          <input id={name} name={name} type={type} placeholder={placeholder} required className={fieldClass} />
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="programme" className="mb-2 block text-sm font-semibold text-[#445047]">Selected programme</label>
        <select id="programme" name="programme" required className={fieldClass}><option value="">Select a programme</option><option>Basic</option><option>Diploma</option><option>BSc Degree</option><option>{"Master's"}</option><option>Doctorate</option></select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="address" className="mb-2 block text-sm font-semibold text-[#445047]">Residential address</label>
        <textarea id="address" name="address" required rows={3} className="w-full rounded-md border border-[#ccd7cf] px-4 py-3 outline-none transition focus:border-[#153e2a] focus:ring-2 focus:ring-[#cfe2d5]" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="h-12 w-full rounded-md bg-[#153e2a] font-semibold text-white transition hover:bg-[#0b2e1c]">Submit registration details</button>
      </div>
      {message && <p role="status" className="sm:col-span-2 rounded-md border border-[#cfe2d5] bg-[#f3f7f4] px-4 py-3 text-sm text-[#445047]">{message}</p>}
    </form>
  );
}
