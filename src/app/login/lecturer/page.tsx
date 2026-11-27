import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Lecturer Login" };

export default function LecturerLoginPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[680px] bg-[#f7f9f7] lg:grid-cols-2">
        <div className="hidden bg-[#153e2a] px-12 py-16 text-white lg:flex lg:flex-col lg:justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bdd1c3]">Lecturer portal</p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight">Manage your teaching activities.</h1>
          <p className="mt-5 max-w-md leading-7 text-[#dde8e1]">Access assigned programmes, classes and academic tools.</p>
        </div>
        <div className="flex items-center justify-center px-5 py-16 sm:px-8"><div className="w-full max-w-md"><h1 className="text-3xl font-semibold text-[#153e2a] lg:hidden">Lecturer login</h1><p className="mb-8 mt-3 text-sm text-[#68756d]">Sign in with your lecturer account.</p><LoginForm role="Lecturer" /></div></div>
      </section>
    </PageLayout>
  );
}
