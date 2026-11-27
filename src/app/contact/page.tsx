"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { PageLayout } from "@/components/page-layout";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Your message is ready. Direct sending will be connected when contact services are configured.");
  }
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Talk to the campus team." description="Send an enquiry about programmes, registration or general campus services." />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <aside><h2 className="text-xl font-semibold text-[#153e2a]">Enquiry information</h2><p className="mt-4 leading-7 text-[#68756d]">Use the form for programme and registration enquiries. Direct contact details can be added when verified institutional information is available.</p></aside>
          <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#445047]">Full name</label><input id="name" name="name" required className="h-12 w-full rounded-md border border-[#ccd7cf] px-4" /></div>
            <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#445047]">Email address</label><input id="email" name="email" type="email" required className="h-12 w-full rounded-md border border-[#ccd7cf] px-4" /></div>
            <div className="sm:col-span-2"><label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#445047]">Subject</label><input id="subject" name="subject" required className="h-12 w-full rounded-md border border-[#ccd7cf] px-4" /></div>
            <div className="sm:col-span-2"><label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#445047]">Message</label><textarea id="message" name="message" required rows={6} className="w-full rounded-md border border-[#ccd7cf] px-4 py-3" /></div>
            <button type="submit" className="sm:col-span-2 h-12 rounded-md bg-[#153e2a] font-semibold text-white">Send enquiry</button>
            {message && <p role="status" className="sm:col-span-2 rounded-md border border-[#cfe2d5] bg-[#f3f7f4] px-4 py-3 text-sm">{message}</p>}
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
