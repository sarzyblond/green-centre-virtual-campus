import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How Green Centre Virtual Campus protects and handles personal academic information." />
      <article className="mx-auto max-w-4xl px-5 py-16 leading-8 text-[#5d685f] sm:px-8">
        <h2 className="text-2xl font-semibold text-[#153e2a]">Information use</h2>
        <p className="mt-4">The campus will collect and process only information needed to create and manage academic accounts, provide learning services and maintain institutional records. Personal information must not be publicly displayed or shared outside authorized academic purposes.</p>
        <h2 className="mt-10 text-2xl font-semibold text-[#153e2a]">Account security</h2>
        <p className="mt-4">Access will be protected through authenticated user sessions and role-based authorization. Users are responsible for keeping their account credentials confidential.</p>
      </article>
    </PageLayout>
  );
}
