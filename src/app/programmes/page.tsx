import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "Available Programmes" };

const programmes = [
  ["Basic", "An introductory pathway for foundational knowledge and natural health awareness."],
  ["Diploma", "Focused academic study combining core theory, applied learning and professional development."],
  ["BSc Degree", "A structured undergraduate-level pathway for developing deep subject knowledge."],
  ["Master's", "Advanced postgraduate study for experienced and academically prepared professionals."],
  ["Doctorate", "The highest academic level, designed for original scholarship and advanced practice."],
];

export default function ProgrammesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Academic pathways" title="Available programmes" description="Explore the programme levels offered by Green Centre Institute of Natural Medicine." />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map(([name, copy], index) => (
            <article key={name} className="flex min-h-64 flex-col rounded-xl border border-[#dfe8e2] p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a33a32]">Programme {index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#153e2a]">{name}</h2>
              <p className="mt-4 flex-1 leading-7 text-[#5d685f]">{copy}</p>
              <Link href="/register" className="mt-6 text-sm font-bold text-[#153e2a]">Register for this level →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
