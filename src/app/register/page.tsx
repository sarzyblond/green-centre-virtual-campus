import type { Metadata } from "next";
import { RegistrationForm } from "@/components/auth/registration-form";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Student Registration" };

export default function RegisterPage() {
  return (
    <PageLayout>
      <section className="bg-[#f7f9f7] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a33a32]">Student registration</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#153e2a]">Create your campus account</h1>
          <p className="mt-4 max-w-2xl leading-7 text-[#68756d]">Provide your academic and contact information to begin your registration journey.</p>
          <div className="mt-8 rounded-xl border border-[#dfe8e2] bg-white p-5 shadow-sm sm:p-8"><RegistrationForm /></div>
        </div>
      </section>
    </PageLayout>
  );
}
