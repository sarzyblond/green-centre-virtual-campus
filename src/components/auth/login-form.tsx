"use client";

import { useState } from "react";

export function LoginForm({ role }: { role: "Student" | "Lecturer" | "Administrator" }) {
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("email") || !form.get("password")) {
      setMessage("Enter your email address and password.");
      return;
    }
    setMessage("Authentication is ready to be connected in the next development step.");
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#445047]">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" className="h-12 w-full rounded-md border border-[#ccd7cf] px-4 outline-none transition focus:border-[#153e2a] focus:ring-2 focus:ring-[#cfe2d5]" />
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-semibold text-[#445047]">Password</label>
          <button type="button" className="text-sm font-semibold text-[#153e2a]">Forgot password?</button>
        </div>
        <input id="password" name="password" type="password" autoComplete="current-password" className="h-12 w-full rounded-md border border-[#ccd7cf] px-4 outline-none transition focus:border-[#153e2a] focus:ring-2 focus:ring-[#cfe2d5]" />
      </div>
      <button type="submit" className="h-12 w-full rounded-md bg-[#153e2a] font-semibold text-white transition hover:bg-[#0b2e1c]">Sign in as {role.toLowerCase()}</button>
      {message && <p role="status" className="rounded-md border border-[#cfe2d5] bg-[#f3f7f4] px-4 py-3 text-sm text-[#445047]">{message}</p>}
    </form>
  );
}
