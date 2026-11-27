import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Student Login" };

export default function StudentLoginPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[680px] bg-[#f7f9f7] lg:grid-cols-2">
        <div className="hidden bg-[#0b2e1c] px-12 py-16 text-white lg:flex lg:flex-col lg:justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bdd1c3]">Student portal</p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight">Continue your academic journey.</h1>
          <p className="mt-5 max-w-md leading-7 text-[#dde8e1]">Access your programme, classes, learning materials and attendance.</p>
        </div>
        <div className="flex items-center justify-center px-5 py-16 sm:px-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-[#153e2a] lg:hidden">Student login</h1>
            <p className="mb-8 mt-3 text-sm text-[#68756d]">Sign in with your campus account.</p>
            <LoginForm role="Student" />
            <p className="mt-6 text-sm text-[#68756d]">New student? <Link href="/register" className="font-bold text-[#153e2a]">Create an account</Link></p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
