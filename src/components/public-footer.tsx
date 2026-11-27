import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t border-[#dfe8e2] bg-[#f7f9f7]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div><p className="font-semibold text-[#153e2a]">Green Centre Institute of Natural Medicine</p><p className="mt-2 text-sm text-[#68756d]">Green Centre Virtual Campus</p></div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#68756d]" aria-label="Footer navigation">
          <Link href="/privacy" className="hover:text-[#153e2a]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#153e2a]">Terms & Conditions</Link>
          <Link href="/login/lecturer" className="hover:text-[#153e2a]">Lecturer login</Link>
          <Link href="/login/admin" className="hover:text-[#153e2a]">Administrator login</Link>
        </nav>
      </div>
      <div className="border-t border-[#dfe8e2]"><p className="mx-auto max-w-7xl px-5 py-5 text-xs text-[#68756d] sm:px-8 lg:px-12">© 2026 Green Centre Institute of Natural Medicine.</p></div>
    </footer>
  );
}
