import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Terms and Conditions" description="Terms governing access to and use of Green Centre Virtual Campus." />
      <article className="mx-auto max-w-4xl px-5 py-16 leading-8 text-[#5d685f] sm:px-8">
        <h2 className="text-2xl font-semibold text-[#153e2a]">Acceptable use</h2>
        <p className="mt-4">Users must provide accurate account information, comply with institutional academic rules and use the campus only for authorized learning or administration activities.</p>
        <h2 className="mt-10 text-2xl font-semibold text-[#153e2a]">Academic conduct</h2>
        <p className="mt-4">Students, lecturers and administrators are responsible for respecting privacy, intellectual property, academic integrity and other users of the platform.</p>
      </article>
    </PageLayout>
  );
}
