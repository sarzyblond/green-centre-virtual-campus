"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/programmes", "Programmes"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe8e2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Green Centre Virtual Campus home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#153e2a] text-sm font-bold text-white">GC</span>
          <span className="hidden leading-tight sm:block"><span className="block text-sm font-bold text-[#153e2a]">Green Centre Institute</span><span className="block text-xs text-[#68756d]">of Natural Medicine</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([href, label]) => <Link key={href} href={href} className="text-sm font-semibold text-[#445047] transition hover:text-[#153e2a]">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link href="/login/student" className="rounded-md px-3 py-2 text-sm font-semibold text-[#153e2a] hover:bg-[#edf4ef]">Student login</Link>
          <Link href="/register" className="rounded-md bg-[#153e2a] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0b2e1c]">Register</Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-md border border-[#dfe8e2] sm:hidden" aria-expanded={open} aria-label="Toggle navigation"><span className="text-xl">{open ? "×" : "☰"}</span></button>
      </div>
      {open && (
        <nav className="border-t border-[#dfe8e2] bg-white px-5 py-4 sm:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold text-[#445047] hover:bg-[#edf4ef]">{label}</Link>)}
            <Link href="/login/student" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold text-[#445047]">Student login</Link>
            <Link href="/register" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-[#153e2a] px-4 py-3 text-center font-semibold text-white">Register</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
