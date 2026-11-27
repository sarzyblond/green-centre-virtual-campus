import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a33a32]">404</p><h1 className="mt-3 text-4xl font-semibold text-[#153e2a]">Page not found</h1><p className="mt-4 text-[#68756d]">The page you requested is not available.</p><Link href="/" className="mt-6 inline-block rounded-md bg-[#153e2a] px-5 py-3 font-semibold text-white">Return home</Link></div>
    </main>
  );
}
