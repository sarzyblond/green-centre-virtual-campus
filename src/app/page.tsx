import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export default function Home() {
  return (
    <>
      <PublicHeader />
      <main>
        <section className="overflow-hidden bg-[#0b2e1c] text-white">
          <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12">
            <div className="animate-rise max-w-2xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#bdd1c3]">Learn with purpose</p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">Natural medicine education for meaningful practice.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#dde8e1]">
                Access structured programmes, qualified lecturers and a supportive academic community through the Green Centre Virtual Campus.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/programmes" className="rounded-md bg-white px-6 py-3 text-center font-semibold text-[#0b2e1c] transition hover:bg-[#edf4ef]">Explore programmes</Link>
                <Link href="/register" className="rounded-md border border-white/35 px-6 py-3 text-center font-semibold text-white transition hover:border-white hover:bg-white/10">Register as a student</Link>
              </div>
            </div>
            <div className="animate-rise rounded-xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl [animation-delay:120ms] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["5", "Programme levels"],
                  ["One", "Connected campus"],
                  ["Live", "Virtual learning"],
                  ["Secure", "Student access"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-[#102f20] p-6">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-2 text-sm text-[#bdd1c3]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8b332c]">Virtual learning</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172019] sm:text-4xl">Everything you need for your academic journey.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Structured programmes", "Move through clear programme stages with dedicated courses and academic guidance."],
                ["Connected teaching", "Learn alongside your lecturers and peers through classes and course resources."],
                ["Accessible resources", "Keep learning materials, announcements and academic progress in one secure place."],
              ].map(([title, copy]) => (
                <article key={title} className="rounded-xl border border-[#dfe8e2] p-7 shadow-sm">
                  <div className="mb-5 h-1 w-10 rounded-full bg-[#a33a32]" />
                  <h3 className="text-xl font-semibold text-[#153e2a]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5d685f]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
