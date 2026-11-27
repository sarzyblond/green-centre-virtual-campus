import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Administrator Login" };

export default function AdminLoginPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[680px] bg-[#f7f9f7] lg:grid-cols-2">
        <div className="hidden bg-[#172019] px-12 py-16 text-white lg:flex lg:flex-col lg:justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfc8c1]">Administration portal</p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight">Administer the virtual campus.</h1>
          <p className="mt-5 max-w-md leading-7 text-[#dde3de]">Manage academic records, users, programmes and platform operations.</p>
        </div>
        <div className="flex items-center justify-center px-5 py-16 sm:px-8"><div className="w-full max-w-md"><h1 className="text-3xl font-semibold text-[#153e2a] lg:hidden">Administrator login</h1><p className="mb-8 mt-3 text-sm text-[#68756d]">Sign in with your administrator account.</p><LoginForm role="Administrator" /></div></div>
      </section>
    </PageLayout>
  );
}
