import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = { title: "About the Virtual Campus" };

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="About us" title="A campus designed around focused learning." description="Green Centre Virtual Campus brings academic administration, teaching and student support into one accessible digital environment." />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <article><h2 className="text-2xl font-semibold text-[#153e2a]">Our purpose</h2><p className="mt-4 leading-8 text-[#5d685f]">The campus supports organised, responsible education in natural medicine. It helps students follow their programmes, lecturers manage teaching activities and administrators maintain clear academic records.</p></article>
          <article><h2 className="text-2xl font-semibold text-[#153e2a]">Our approach</h2><p className="mt-4 leading-8 text-[#5d685f]">We prioritise accessible navigation, secure account access, clear academic information and practical digital tools. The platform is designed for dependable learning rather than unnecessary complexity.</p></article>
        </div>
      </section>
    </PageLayout>
  );
}
