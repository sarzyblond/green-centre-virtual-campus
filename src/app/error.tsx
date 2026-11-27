"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div><h1 className="text-3xl font-semibold text-[#153e2a]">We could not load this page</h1><p className="mt-4 text-[#68756d]">Please try again.</p><button type="button" onClick={reset} className="mt-6 rounded-md bg-[#153e2a] px-5 py-3 font-semibold text-white">Try again</button></div>
    </main>
  );
}
